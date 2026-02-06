'use client';

import { useState, useEffect } from 'react';
import styles from './ProgramHeroCards.module.css';
import Link from 'next/link';
import Image from 'next/image';

const programs = [
    {
        id: 'introductory',
        title: 'Introductory Program',
        subtitle: 'Class 6th',
        scopeLabel: 'Excel in School & Olympiads:',
        scope: 'School Exams, NSO, IMO, Olympiads',
        description: 'Build a strong base early for future success.',
        color: 'linear-gradient(135deg, #2D1B69 0%, #4A2F9E 100%)',
        accent: '#9D65E8',
        image: '/banners/introductory.png',
        ctaText: 'Start Early'
    },
    {
        id: 'pre-foundation',
        title: 'Pre-Foundation',
        subtitle: 'Class 7th to 8th',
        scopeLabel: 'Master Fundamentals for:',
        scope: 'School Exams, NSO, IMO, Olympiads',
        description: 'Start your JEE/NEET journey with solid fundamentals.',
        color: 'linear-gradient(135deg, #004e92 0%, #000428 100%)',
        accent: '#00d2ff',
        image: '/banners/pre-foundation.png',
        ctaText: 'Join Foundation'
    },
    {
        id: 'foundation',
        title: 'Foundation',
        subtitle: 'Class 9th to 10th',
        scopeLabel: 'Conquer Boards & Competitions:',
        scope: 'School Exams, Boards, NSO, IMO, NSEJS, IOQM, RMO, NTSE, Olympiads',
        description: 'Comprehensive preparation for Board & Competitive exams.',
        color: 'linear-gradient(135deg, #134E5E 0%, #71B280 100%)',
        accent: '#71B280',
        image: '/banners/foundation.png',
        ctaText: 'Ace Exams'
    },
    {
        id: 'competitive',
        title: 'Competitive',
        subtitle: 'Class 11th to 13th',
        scopeLabel: 'Target Top Ranks in:',
        scope: 'PCMB + Commerce + Humanities, Boards, CUET, NSEP, NSEC, RMO, NEET, JEE',
        description: 'Targeted coaching for JEE Main, Advanced & NEET.',
        color: 'linear-gradient(135deg, #870000 0%, #190A05 100%)',
        accent: '#FF4D4D',
        image: '/banners/competitive.png',
        ctaText: 'Get Rank'
    }
];

export default function ProgramHeroCards() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % programs.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % programs.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + programs.length) % programs.length);
    };

    return (
        <section className={styles.container}>
            <div className={styles.carouselWrapper}>
                <div className={styles.slidesContainer}>
                    {programs.map((program, index) => (
                        <div
                            key={program.id}
                            className={`${styles.slide} ${index === currentIndex ? styles.active : ''}`}
                            style={{
                                background: program.color,
                                opacity: index === currentIndex ? 1 : 0,
                                pointerEvents: index === currentIndex ? 'all' : 'none',
                            }}
                        >
                            {/* Left Content */}
                            <div className={styles.content}>
                                <div className={styles.badge} style={{ color: program.accent, borderColor: program.accent }}>
                                    {program.subtitle}
                                </div>
                                <h2 className={styles.title}>{program.title}</h2>
                                <div className={styles.scopeBox} style={{ borderLeftColor: program.accent }}>
                                    <span className={styles.scopeLabel} style={{ color: program.accent }}>
                                        {program.scopeLabel}
                                    </span>
                                    <p className={styles.scopeText}>{program.scope}</p>
                                </div>

                                <Link href={`#${program.id}`} className={styles.cta}>
                                    {program.ctaText} <span className={styles.arrow}>→</span>
                                </Link>
                            </div>

                            {/* Right Image */}
                            <div className={styles.imageWrapper}>
                                <div className={styles.imageContainer}>
                                    <Image
                                        src={program.image}
                                        alt={program.title}
                                        fill
                                        className={styles.bannerImage}
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        priority={index === 0}
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Navigation Controls */}
                <button className={`${styles.navBtn} ${styles.prevBtn}`} onClick={prevSlide} aria-label="Previous slide">‹</button>
                <button className={`${styles.navBtn} ${styles.nextBtn}`} onClick={nextSlide} aria-label="Next slide">›</button>

                {/* Indicators */}
                <div className={styles.indicators}>
                    {programs.map((_, index) => (
                        <button
                            key={index}
                            className={`${styles.indicator} ${index === currentIndex ? styles.activeIndicator : ''}`}
                            onClick={() => setCurrentIndex(index)}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
