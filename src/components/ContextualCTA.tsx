'use client';

import styles from './ContextualCTA.module.css';

interface ContextualCTAProps {
    onBookDemo: () => void;
    onEnrol: () => void;
    bgStyle?: 'light' | 'dark';
}

export default function ContextualCTA({ onBookDemo, onEnrol, bgStyle = 'light' }: ContextualCTAProps) {
    return (
        <section className={`${styles.section} ${bgStyle === 'dark' ? styles.dark : styles.light}`}>
            <div className={styles.container}>
                <h3 className={styles.heading}>Ready to start your journey?</h3>
                <div className={styles.buttonGroup}>
                    <button className={styles.demoButton} onClick={onBookDemo}>
                        Book Free Demo
                    </button>
                    <button className={styles.enrolButton} onClick={onEnrol}>
                        Enrol Now
                    </button>
                    <button className={styles.detailsButton} onClick={onEnrol}>
                        Get Fee Details
                    </button>
                </div>
            </div>
        </section>
    );
}
