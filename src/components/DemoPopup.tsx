'use client';

import React, { useState, useEffect } from 'react';
import styles from './DemoPopup.module.css';
import CloudflareCaptcha from './CloudflareCaptcha';
import { verifyTurnstile } from '../actions/verifyTurnstile';

interface DemoPopupProps {
    isOpen: boolean;
    onClose: () => void;
    onSuccess: () => void;
}

const DemoPopup: React.FC<DemoPopupProps> = ({ isOpen, onClose, onSuccess }) => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [turnstileToken, setTurnstileToken] = useState('');
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        class: ''
    });

    // Reset form when reopened
    useEffect(() => {
        if (isOpen) {
            setFormData({ name: '', phone: '', class: '' });
            setIsSubmitting(false);
        }
    }, [isOpen]);

    if (!isOpen) return null;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!turnstileToken) {
            alert("Please verify you are human.");
            return;
        }

        setIsSubmitting(true);

        const verification = await verifyTurnstile(turnstileToken);
        if (!verification.success) {
            alert("Captcha verification failed. Please try again.");
            setIsSubmitting(false);
            return;
        }

        // Mock Submission Delay (2 seconds)
        setTimeout(() => {
            setIsSubmitting(false);
            onSuccess(); // Trigger Success Popup
            onClose();   // Close Form

            // Console log for verification (Mock Backend)
            console.log("Demo Form Submitted:", formData);
        }, 2000);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className={styles.overlay} onClick={onClose}>
            <div className={styles.modal} onClick={e => e.stopPropagation()}>
                <button className={styles.closeButton} onClick={onClose}>×</button>

                <div className={styles.header}>
                    <h2 className={styles.title}>Book Free Demo</h2>
                    <p className={styles.subtitle}>Experience our premium teaching methodology</p>
                </div>

                <form className={styles.form} onSubmit={handleSubmit}>
                    <div className={styles.inputGroup}>
                        <label className={styles.label} htmlFor="name">Student Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            className={styles.input}
                            placeholder="Enter full name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </div>

                    <div className={styles.inputGroup}>
                        <label className={styles.label} htmlFor="phone">Phone Number</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            required
                            pattern="[0-9]{10}"
                            className={styles.input}
                            placeholder="10 digit mobile number"
                            value={formData.phone}
                            onChange={handleChange}
                        />
                    </div>

                    <div className={styles.inputGroup}>
                        <label className={styles.label} htmlFor="class">Select Class</label>
                        <select
                            id="class"
                            name="class"
                            required
                            className={styles.select}
                            value={formData.class}
                            onChange={handleChange}
                        >
                            <option value="">Choose Class</option>
                            <option value="6">Class 6th</option>
                            <option value="7">Class 7th</option>
                            <option value="8">Class 8th</option>
                            <option value="9">Class 9th</option>
                            <option value="10">Class 10th</option>
                            <option value="11">Class 11th</option>
                            <option value="12">Class 12th</option>
                            <option value="12+">Dropper/Repeater</option>
                        </select>
                    </div>


                    <CloudflareCaptcha onVerify={(token) => setTurnstileToken(token)} />

                    <button type="submit" className={styles.submitButton} disabled={isSubmitting}>
                        {isSubmitting ? (
                            <><span className={styles.loader}></span> Submitting...</>
                        ) : 'Book Free Demo'}
                    </button>
                </form>
            </div >
        </div >
    );
};

export default DemoPopup;
