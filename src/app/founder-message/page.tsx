'use client';

import styles from './page.module.css';
import { useEffect } from 'react';

export default function FounderMessagePage() {

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add(styles.fadeInUp);
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        const animatedElements = document.querySelectorAll(`
            .${styles.heroContent},
            .${styles.letterCard}
        `);

        animatedElements.forEach((el, index) => {
            if (el instanceof HTMLElement) {
                el.style.opacity = '0'; // Initial state
                el.style.animationDelay = `${index * 150}ms`; // Staggered delay
                observer.observe(el);
            }
        });

        return () => observer.disconnect();
    }, []);

    return (
        <main className={styles.container}>
            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={styles.heroBackground} />
                <div className={styles.heroContent}>
                    <span className={styles.badge}>A NOTE FROM US</span>
                    <h1 className={styles.title}>Founder's Message</h1>
                </div>
            </section>

            {/* Letter Content */}
            <section className={styles.letterSection}>
                <div className={styles.letterCard}>
                    <p className={styles.paragraph}>
                        We are thrilled to welcome you to <span className={styles.highlight}>FAST</span>, a place where education meets innovation, and where your academic journey is our top priority.
                    </p>
                    <p className={styles.paragraph}>
                        FAST was founded by a trio of passionate individuals who share a common vision: to provide the finest education by seamlessly blending offline and online coaching. With a combined experience of over a decade, we have observed the evolving landscape of education and recognized the need for a comprehensive and adaptive approach to learning.
                    </p>
                    <p className={styles.paragraph}>
                        Our motivation to establish FAST was born from our own experiences as students, and later as educators. We know the importance of guidance, support, and the right resources to unlock your full potential. As a result, we have dedicated ourselves to crafting an environment that fosters learning, growth, and success.
                    </p>
                    <p className={styles.paragraph}>
                        At FAST, we believe that education should not be confined to the classroom. It should be <span className={styles.highlight}>accessible, engaging, and tailored</span> to each student’s unique learning style. This is why we have combined the best of both worlds – offline coaching for a personal touch and online coaching for flexibility and convenience. Our teaching methods are designed to inspire, challenge, and encourage you to reach your goals, and our commitment to excellence is unwavering.
                    </p>
                    <p className={styles.paragraph}>
                        We are not just here to educate; we are here to inspire, guide, and empower you. Our journey is intertwined with yours, and together, we can achieve greatness.
                    </p>
                    <p className={styles.paragraph}>
                        Welcome to FAST, where your future takes flight. Join us, and let’s embark on this incredible educational journey together.
                    </p>

                    <div className={styles.closing}>
                        Sincerely,
                    </div>
                    <div className={styles.signatureArea}>
                        <div className={styles.signatureName}>Kartikey Mishra</div>
                        <div className={styles.signatureName}>Paritosh Mishra</div>
                        <div className={styles.signatureName}>Pragyan Mishra</div>
                        <div className={styles.signatureRole}>Founders, FAST Eduventures</div>
                    </div>
                </div>
            </section>
        </main>
    );
}
