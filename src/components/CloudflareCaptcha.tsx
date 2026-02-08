'use client';

import { useEffect, useRef, useState } from 'react';
import Script from 'next/script';
import { getTurnstileToken, setTurnstileToken } from '../utils/captchaManager';

interface CloudflareCaptchaProps {
    onVerify?: (token: string) => void;
}

export default function CloudflareCaptcha({ onVerify }: CloudflareCaptchaProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [hasExistingToken, setHasExistingToken] = useState(false);

    // Environment variable for site key
    const SITE_KEY = process.env.NEXT_PUBLIC_CLOUDFLARE_SITE_KEY;

    // Check for existing valid token on mount
    useEffect(() => {
        const existingToken = getTurnstileToken();
        if (existingToken) {
            setHasExistingToken(true);
            // Immediately notify parent component of existing token
            if (onVerify) {
                onVerify(existingToken);
            }
            console.log('Using existing valid Turnstile token');
        }
    }, [onVerify]);

    useEffect(() => {
        // Only render CAPTCHA if no valid token exists
        if (hasExistingToken) return;

        if (isLoaded && containerRef.current && (window as any).turnstile) {
            if (!SITE_KEY) {
                console.error('Cloudflare Turnstile Site Key is missing. Check environment variables.');
                return;
            }

            // Clean up any existing widget in this container to prevent duplicates if re-rendered
            containerRef.current.innerHTML = '';

            try {
                (window as any).turnstile.render(containerRef.current, {
                    sitekey: SITE_KEY,
                    callback: (token: string) => {
                        console.log('Turnstile verified, token:', token);
                        // Store token in localStorage
                        setTurnstileToken(token);
                        if (onVerify) onVerify(token);
                    },
                });
            } catch (error) {
                console.error('Error rendering Cloudflare Turnstile:', error);
            }
        }
    }, [isLoaded, onVerify, hasExistingToken, SITE_KEY]);

    // If token already exists, show verification status
    if (hasExistingToken) {
        return (
            <div style={{
                minHeight: '65px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '12px',
                backgroundColor: '#f0fdf4',
                border: '1px solid #86efac',
                borderRadius: '8px',
                color: '#166534',
                fontSize: '14px',
                fontWeight: '500'
            }}>
                ✓ Already verified - you can submit this form
            </div>
        );
    }

    return (
        <div style={{ minHeight: '65px', display: 'flex', justifyContent: 'center' }}>
            <Script
                src="https://challenges.cloudflare.com/turnstile/v0/api.js"
                strategy="lazyOnload"
                onLoad={() => setIsLoaded(true)}
            />
            <div ref={containerRef} />
        </div>
    );
}
