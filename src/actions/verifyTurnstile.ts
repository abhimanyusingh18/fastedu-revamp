'use server';

export async function verifyTurnstile(token: string) {
    const secretKey = process.env.SECRET_KEY;

    if (!secretKey) {
        console.error('Turnstile SECRET_KEY is not set in environment variables');
        return { success: false, message: 'Server configuration error' };
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
            return { success: true };
        } else {
            console.error('Turnstile verification failed:', outcome);
            return { success: false, message: 'Captcha verification failed' };
        }
    } catch (error) {
        console.error('Turnstile verification error:', error);
        return { success: false, message: 'Verification error occurred' };
    }
}
