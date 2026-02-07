'use client';

import styles from './UrgencyBand.module.css';

export default function UrgencyBand() {
    return (
        <div className={styles.band}>
            <div className={styles.container}>
                <span className={styles.item}>🔥 New batch starting soon</span>
                <span className={styles.separator}>•</span>
                <span className={styles.item}>⚡ Free demo available</span>
                <span className={styles.separator}>•</span>
                <span className={styles.item}>🎓 Limited seats / Scholarship test</span>
            </div>
        </div>
    );
}
