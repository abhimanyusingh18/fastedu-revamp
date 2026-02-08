'use server';

// Server-side token cache to allow token reuse within TTL
// In production, use Redis or similar for distributed systems
interface TokenCacheEntry {
    verified: boolean;
    timestamp: number;
}

const tokenCache = new Map<string, TokenCacheEntry>();
const TOKEN_CACHE_TTL = 300000; // 5 minutes in milliseconds

// Clean up expired tokens periodically
function cleanExpiredTokens() {
    const now = Date.now();
    for (const [token, entry] of tokenCache.entries()) {
        if (now - entry.timestamp > TOKEN_CACHE_TTL) {
            tokenCache.delete(token);
        }
    }
}

export async function verifyTurnstile(token: string) {
    const secretKey = process.env.SECRET_KEY;

    if (!secretKey) {
        console.error('Turnstile SECRET_KEY is not set in environment variables');
        return { success: false, message: 'Server configuration error' };
    }

    // Check if token was recently verified (within TTL)
    const cachedEntry = tokenCache.get(token);
    if (cachedEntry) {
        const tokenAge = Date.now() - cachedEntry.timestamp;
        if (tokenAge < TOKEN_CACHE_TTL && cachedEntry.verified) {
            console.log(`Token reused (age: ${Math.round(tokenAge / 1000)}s)`);
            return {
                success: true,
                cached: true,
                tokenAge: Math.round(tokenAge / 1000)
            };
        } else {
            // Token expired, remove from cache
            tokenCache.delete(token);
        }
    }

    try {
        const formData = new FormData();
        formData.append('secret', secretKey);
        formData.append('response', token);

        const result = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
            method: 'POST',
            body: formData,
        });

        const outcome = await result.json();

        if (outcome.success) {
            // Cache the verified token
            tokenCache.set(token, {
                verified: true,
                timestamp: Date.now()
            });

            // Clean up old tokens periodically
            if (tokenCache.size > 100) {
                cleanExpiredTokens();
            }

            console.log('Token verified and cached');
            return { success: true, cached: false };
        } else {
            console.error('Turnstile verification failed:', outcome);
            return { success: false, message: 'Captcha verification failed' };
        }
    } catch (error) {
        console.error('Turnstile verification error:', error);
        return { success: false, message: 'Verification error occurred' };
    }
}
