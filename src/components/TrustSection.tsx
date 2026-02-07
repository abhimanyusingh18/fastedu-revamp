'use client';

import React from 'react';
import styles from './TrustSection.module.css';
import Image from 'next/image';

const TESTIMONIALS = [
    {
        name: 'Arav Jindal',
        role: 'JEE Advanced Rank 1240',
        text: 'The faculty at FAST is exceptional. They focus on concepts rather than rote learning. Doubts were cleared instantly.'
    },
    {
        name: 'Sneha Gupta',
        role: 'NEET Score 680',
        text: 'Regular tests and analysis helped me improve my weak areas. The environment is competitive yet supportive.'
    },
    {
        name: 'Rohan Sharma',
        role: 'Class 10 - 98.2%',
        text: 'Foundation course at FAST built the exact base I needed for JEE preparation. Highly recommended for early starters.'
    }
];

export default function TrustSection() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Trusted by Toppers</h2>
                    <div className={styles.underline}></div>
                </div>

                <div className={styles.grid}>
                    {/* Google Reviews Card */}
                    <div className={styles.reviewCard}>
                        <div className={styles.reviewImageWrapper}>
                            <Image
                                src="/images/google_reviews_summary.png"
                                alt="Google Reviews Summary"
                                width={400}
                                height={400}
                                className={styles.reviewImage}
                            />
                        </div>
                        <p className={styles.reviewCaption}>
                            Consistently rated <strong>4.9/5</strong> by students and parents for our quality education and results.
                        </p>
                    </div>

                    {/* Testimonials Carousel/Grid */}
                    <div className={styles.testimonials}>
                        {TESTIMONIALS.map((t, i) => (
                            <div key={i} className={styles.testimonialCard}>
                                <div className={styles.quoteIcon}>“</div>
                                <p className={styles.text}>{t.text}</p>
                                <div className={styles.author}>
                                    <h4 className={styles.name}>{t.name}</h4>
                                    <span className={styles.role}>{t.role}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Results Highlights */}
                <div className={styles.resultsBar}>
                    <div className={styles.resultItem}>
                        <span className={styles.resultNumber}>50+</span>
                        <span className={styles.resultLabel}>IIT Selections</span>
                    </div>
                    <div className={styles.resultItem}>
                        <span className={styles.resultNumber}>100+</span>
                        <span className={styles.resultLabel}>Dr. Produced</span>
                    </div>
                    <div className={styles.resultItem}>
                        <span className={styles.resultNumber}>98%</span>
                        <span className={styles.resultLabel}>Board Success</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
