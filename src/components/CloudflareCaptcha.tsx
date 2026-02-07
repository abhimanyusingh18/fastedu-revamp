'use client';

import { useEffect, useRef, useState } from 'react';
import Script from 'next/script';

interface CloudflareCaptchaProps {
    onVerify?: (token: string) => void;
}

export default function CloudflareCaptcha({ onVerify }: CloudflareCaptchaProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isLoaded, setIsLoaded] = useState(false);

    // Environment variable for site key
    const SITE_KEY = process.env.NEXT_PUBLIC_CLOUDFLARE_SITE_KEY;

    useEffect(() => {
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
                        if (onVerify) onVerify(token);
                    },
                });
            } catch (error) {
                console.error('Error rendering Cloudflare Turnstile:', error);
            }
        }
    }, [isLoaded, onVerify]);

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
