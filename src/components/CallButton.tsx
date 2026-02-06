'use client';

import { useState } from 'react';
import styles from './CallButton.module.css';

export default function CallButton() {
    const [isOpen, setIsOpen] = useState(false);
    const phoneNumber = '7007273922';

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleCall = () => {
        window.location.href = `tel:${phoneNumber}`;
    };

    return (
        <div className={styles.container}>
            {isOpen && (
                <div className={styles.popup}>
                    <button
                        className={styles.closeBtn}
                        onClick={() => setIsOpen(false)}
                        aria-label="Close popup"
                    >
                        ×
                    </button>

                    <div className={styles.popupHeader}>
                        <div className={styles.avatarCircle}>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                <circle cx="12" cy="7" r="4" />
                            </svg>
                            <div className={styles.onlineBadge}></div>
                        </div>
                        <div className={styles.headerText}>
                            <h3 className={styles.popupTitle}>Expert Counsellor</h3>
                            <p className={styles.popupSubtitle}>We're here to help you crack your dream exam!</p>
                        </div>
                    </div>

                    <div className={styles.popupBody}>
                        <button className={styles.callNumberButton} onClick={handleCall}>
                            <div className={styles.callIconBox}>
                                <svg viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                                </svg>
                            </div>
                            <span>Call {phoneNumber}</span>
                        </button>
                        <p className={styles.note}>Available 10 AM - 10 PM</p>
                    </div>
                </div>
            )}

            <button
                className={`${styles.toggleButton} ${isOpen ? styles.open : ''}`}
                onClick={handleToggle}
                aria-label={isOpen ? 'Close' : 'Call us'}
            >
                {isOpen ? (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                ) : (
                    <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                    </svg>
                )}
            </button>
        </div>
    );
}
