/**
 * Cloudflare Turnstile CAPTCHA Token Manager
 * 
 * Manages CAPTCHA token lifecycle with localStorage persistence
 * to enable single CAPTCHA verification across multiple forms.
 */

const STORAGE_KEY = 'turnstile_token';
const STORAGE_TIMESTAMP_KEY = 'turnstile_token_timestamp';
const TOKEN_TTL = 300; // 5 minutes in seconds

interface TurnstileTokenData {
    token: string;
    timestamp: number;
}

/**
 * Check if a stored token is still valid based on TTL
 */
export function isTokenValid(): boolean {
    if (typeof window === 'undefined') return false;

    try {
        const timestamp = localStorage.getItem(STORAGE_TIMESTAMP_KEY);
        if (!timestamp) return false;

        const tokenAge = (Date.now() - parseInt(timestamp, 10)) / 1000; // in seconds
        return tokenAge < TOKEN_TTL;
    } catch (error) {
        console.error('Error checking token validity:', error);
        return false;
    }
}

/**
 * Get the stored Turnstile token if it exists and is valid
 */
export function getTurnstileToken(): string | null {
    if (typeof window === 'undefined') return null;

    try {
        const token = localStorage.getItem(STORAGE_KEY);

        if (!token) return null;

        // Check if token is still valid
        if (!isTokenValid()) {
            clearTurnstileToken();
            return null;
        }

        return token;
    } catch (error) {
        console.error('Error retrieving Turnstile token:', error);
        return null;
    }
}

/**
 * Store a new Turnstile token with current timestamp
 */
export function setTurnstileToken(token: string): void {
    if (typeof window === 'undefined') return;

    try {
        localStorage.setItem(STORAGE_KEY, token);
        localStorage.setItem(STORAGE_TIMESTAMP_KEY, Date.now().toString());
        console.log('Turnstile token stored successfully');
    } catch (error) {
        console.error('Error storing Turnstile token:', error);
    }
}

/**
 * Clear the stored Turnstile token
 */
export function clearTurnstileToken(): void {
    if (typeof window === 'undefined') return;

    try {
        localStorage.removeItem(STORAGE_KEY);
        localStorage.removeItem(STORAGE_TIMESTAMP_KEY);
        console.log('Turnstile token cleared');
    } catch (error) {
        console.error('Error clearing Turnstile token:', error);
    }
}

/**
 * Get token age in seconds
 */
export function getTokenAge(): number | null {
    if (typeof window === 'undefined') return null;

    try {
        const timestamp = localStorage.getItem(STORAGE_TIMESTAMP_KEY);
        if (!timestamp) return null;

        return (Date.now() - parseInt(timestamp, 10)) / 1000;
    } catch (error) {
        console.error('Error getting token age:', error);
        return null;
    }
}
