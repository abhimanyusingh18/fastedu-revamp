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
    message = "We have received your details. Our team will get back to you shortly."
}) => {

    // Close on Escape key
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        if (isOpen) window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div className={styles.overlay} onClick={onClose}>
            <div className={styles.modal} onClick={e => e.stopPropagation()}>
                <div className={styles.iconWrapper}>
                    <svg className={styles.checkmark} viewBox="0 0 52 52">
                        <path d="M14.1 27.2l7.1 7.2 16.7-16.8" />
                    </svg>
                </div>
                <h2 className={styles.title}>{title}</h2>
                <p className={styles.message}>{message}</p>
                <button className={styles.closeButton} onClick={onClose}>
                    Close
                </button>
            </div>
        </div>
    );
};

export default SuccessPopup;
