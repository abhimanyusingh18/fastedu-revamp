'use client';

import styles from './page.module.css';
import { useEffect, useRef } from 'react';

export default function VisionMissionPage() {
    const missionPoints = [
        {
            icon: '🌍',
            title: 'Accessible Education',
            text: 'Breaking barriers to ensure quality education reaches every student, regardless of their background or location.'
        },
        {
            icon: '🎯',
            title: 'Personalized Learning',
            text: 'Recognizing that every student is unique, we tailor our teaching methods to match individual learning styles and paces.'
        },
        {
            icon: '🚀',
            title: 'Empowering Educators',
            text: 'Supporting our teachers with the best resources and environment so they can inspire the next generation of leaders.'
        },
        {
            icon: '✨',
            title: 'Fun & Engaging',
            text: 'Making education an exciting journey of discovery, moving beyond rote learning to spark genuine curiosity.'
        }
    ];

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
            .${styles.missionCard},
            .${styles.closingCard}
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
                    <span className={styles.badge}>OUR VISION & MISSION</span>
                    <h1 className={styles.title}>What We Want?</h1>
                    <p className={styles.subtitle}>
                        Why go anywhere else when the best is available at your doorstep?
                        You must be certain about quality of education, and at FAST,
                        you have the liberty to ascertain that!
                    </p>
                </div>
            </section>

            {/* Mission Grid */}
            <section className={styles.missionSection}>
                {missionPoints.map((point) => (
                    <div key={point.title} className={styles.missionCard}>
                        <div className={styles.iconWrapper}>{point.icon}</div>
                        <h3 className={styles.cardTitle}>{point.title}</h3>
                        <p className={styles.cardText}>{point.text}</p>
                    </div>
                ))}
            </section>

            {/* Closing Statement */}
            <section className={styles.closingSection}>
                <div className={styles.closingCard}>
                    <p className={styles.closingText}>
                        "At FAST, our vision is clear, and our mission is unwavering. We want to be the catalyst for positive change in education, and we invite you to join us on this exciting journey towards a brighter and more educated future. Together, we can shape the education of tomorrow, today."
                    </p>
                    <div className={styles.closingSignature}>
                        The FAST Eduventures Team
                    </div>
                </div>
            </section>
        </main>
    );
}
