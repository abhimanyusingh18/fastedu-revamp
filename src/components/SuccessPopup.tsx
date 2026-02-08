'use client';

import React, { useEffect } from 'react';
import styles from './SuccessPopup.module.css';

interface SuccessPopupProps {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    message?: string;
}

const SuccessPopup: React.FC<SuccessPopupProps> = ({
    isOpen,
    onClose,
    title = "Thank You!",
    message = "We will contact you shortly."
}) => {

    // Auto-close after 2 seconds
    useEffect(() => {
        if (isOpen) {
            const timer = setTimeout(() => {
                onClose();
            }, 2000);

            return () => clearTimeout(timer);
        }
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <div className={styles.iconWrapper}>
                    <svg className={styles.checkmark} viewBox="0 0 52 52">
                        <circle className={styles.checkmarkCircle} cx="26" cy="26" r="25" fill="none" />
                        <path className={styles.checkmarkCheck} fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
                    </svg>
                </div>
                <h2 className={styles.title}>{title}</h2>
                <p className={styles.message}>{message}</p>
            </div>
        </div>
    );
};

export default SuccessPopup;
