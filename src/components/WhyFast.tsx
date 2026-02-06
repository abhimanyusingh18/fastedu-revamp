'use client';

import { useState, useEffect } from 'react';
import styles from './WhyFast.module.css';
import { whyFastItems } from '@/data/whyFast';

const POSITIONS = ['top', 'right', 'bottom', 'left'] as const;

export default function WhyFast() {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % whyFastItems.length);
        }, 3000); // 3 seconds per item + 0.3s transition handled in CSS

        return () => clearInterval(interval);
    }, []);

    const renderIcon = (iconType: string) => {
        switch (iconType) {
            case 'graduation': return <GraduationIcon />;
            case 'question': return <QuestionIcon />;
            case 'medal': return <MedalIcon />;
            case 'database': return <DatabaseIcon />;
            default: return null;
        }
    };

    // Get current item content
    const currentItem = whyFastItems[activeIndex];

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.circleContainer}>
                    {/* Central Content */}
                    <div className={styles.centerContent}>
                        <h2 className={styles.title} key={`t-${activeIndex}`}>
                            {currentItem.title}
                        </h2>
                        <p className={styles.description} key={`d-${activeIndex}`}>
                            {currentItem.description}
                        </p>
                    </div>

                    {/* Rotating Items */}
                    <div className={styles.orbitContainer}>
                        {whyFastItems.map((item, index) => {
                            // Calculate relative position based on active index
                            // If activeIndex is 0 (Top Item), then item 0 is Top
                            // If activeIndex is 1, item 1 is Top, item 0 is Left (or previous)
                            // We want: 
                            // at activeIndex = 0: item 0 is TOP, item 1 is RIGHT, item 2 is BOTTOM, item 3 is LEFT
                            // at activeIndex = 1: item 1 is TOP, item 2 is RIGHT, item 3 is BOTTOM, item 0 is LEFT

                            // Logic: (index - activeIndex + 4) % 4
                            // index 0, active 0 -> pos 0 (Top)
                            // index 1, active 0 -> pos 1 (Right)

                            // Wait, the user said: "transition them from their current position to next position"
                            // If item 0 starts at Top, and we transition to next state (activeIndex 1),
                            // item 0 should move to Left? Or should the positions stay fixed and content rotate?

                            // "Highlight button in circle transition is appearing at the centre... fix positions of buttons on top, left, right and bottom... transition them from their current position to next position"

                            // This implies the physical buttons move.
                            // Let's rotate counter-clockwise so:
                            // Start: 0 at Top.
                            // Step 1: 0 moves to Left, 1 moves to Top.
                            // This means rotation is -90deg.

                            const positionIndex = (index - activeIndex + 4) % 4;
                            // 0: Top, 1: Right, 2: Bottom, 3: Left (Clockwise arrangement)
                            // But if we want Item 1 to go to Top (Active) next, Item 0 must move to Left.
                            // So:
                            // active=0: 0->Top, 1->Right, 2->Bottom, 3->Left
                            // active=1: 0->Left, 1->Top, 2->Right, 3->Bottom

                            const positionClass = styles[POSITIONS[positionIndex]];
                            const isActive = positionIndex === 0; // Top is active

                            return (
                                <div
                                    key={item.id}
                                    className={`${styles.iconItem} ${positionClass} ${isActive ? styles.active : ''}`}
                                >
                                    <div className={styles.iconCircle}>
                                        {renderIcon(item.icon)}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div className={styles.updates}>
                    <h3 className={styles.updatesTitle}>UPDATES</h3>
                    <div className={styles.updatesContent}>
                        <div className={styles.updateItem}>
                            <span className={styles.updateBar}></span>
                            <p>Crash Courses for School Exams begins in NOVEMBER at FAST.</p>
                        </div>
                        <div className={styles.updateItem}>
                            <span className={styles.updateBar}></span>
                            <p>Test Series for JEE/NEET begins in NOVEMBER at FAST.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

// Icons
const GraduationIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 3L1 9l11 6 9-4.91V17h2V9M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z" />
    </svg>
);
const QuestionIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z" />
    </svg>
);
const MedalIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M14.94 19.5L12 17.77 9.06 19.5l.78-3.34-2.59-2.24 3.41-.29L12 10.5l1.34 3.13 3.41.29-2.59 2.24M20 2H4v2l4.86 3.64a8 8 0 1 0 6.28 0L20 4m-2.28 11a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
    </svg>
);
const DatabaseIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 3C7.58 3 4 4.79 4 7s3.58 4 8 4 8-1.79 8-4-3.58-4-8-4M4 9v3c0 2.21 3.58 4 8 4s8-1.79 8-4V9c0 2.21-3.58 4-8 4s-8-1.79-8-4m0 5v3c0 2.21 3.58 4 8 4s8-1.79 8-4v-3c0 2.21-3.58 4-8 4s-8-1.79-8-4z" />
    </svg>
);
