import React from 'react';

export const AreYouFastLogo = () => (
    <svg width="180" height="50" viewBox="0 0 180 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="fastGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#00C6FF" />
                <stop offset="100%" stopColor="#0072FF" />
            </linearGradient>
            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                </feMerge>
            </filter>
        </defs>

        <text x="10" y="32" fontFamily="var(--font-heading)" fontWeight="600" fontSize="16" fill="#334155" letterSpacing="1">
            ARE YOU
        </text>

        <g transform="translate(90, 32) skewX(-15)">
            <text x="0" y="0" fontFamily="var(--font-heading)" fontWeight="900" fontSize="24" fill="url(#fastGradient)" filter="url(#glow)">
                FAST?
            </text>
            <path d="M-5 8 L65 8" stroke="url(#fastGradient)" strokeWidth="3" strokeLinecap="round" />
            <path d="M15 -20 L35 -20" stroke="url(#fastGradient)" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
            <path d="M55 -25 L70 -25" stroke="url(#fastGradient)" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
        </g>
    </svg>
);
