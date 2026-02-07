'use client';

import { useState, useEffect } from 'react';
import styles from './HeadlineCarousel.module.css';

const HEADLINES = [
    "Best JEE / NEET & Science Coaching in Greater Noida West",
    "By IIT / NIT Faculty",
    "Free Demo Class Available"
];

export default function HeadlineCarousel() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % HEADLINES.length);
        }, 3000); // Rotate every 3 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div className={styles.carouselContainer}>
            <div className={styles.staticText}>ARE YOU FAST?</div>
            <div className={styles.rotatingWrapper}>
                {HEADLINES.map((text, i) => (
                    <div
                        key={i}
                        className={`${styles.headline} ${i === index ? styles.active : styles.inactive}`}
                    >
                        {text}
                    </div>
                ))}
            </div>
        </div>
    );
}
