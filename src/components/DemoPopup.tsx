'use client';

import React, { useState, useEffect } from 'react';
import styles from './DemoPopup.module.css';
import CloudflareCaptcha from './CloudflareCaptcha';
import SuccessPopup from './SuccessPopup';
import { verifyTurnstile } from '../actions/verifyTurnstile';
import { getTurnstileToken } from '../utils/captchaManager';

interface DemoPopupProps {
    isOpen: boolean;
    onClose: () => void;
    onSuccess: () => void;
}

const DemoPopup: React.FC<DemoPopupProps> = ({ isOpen, onClose, onSuccess }) => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [turnstileToken, setTurnstileToken] = useState('');
    const [showSuccess, setShowSuccess] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        class: ''
    });

    // Reset form when reopened and check for existing token
    useEffect(() => {
        if (isOpen) {
            setFormData({ name: '', phone: '', class: '' });
            setIsSubmitting(false);

            // Check for existing valid token
            const existingToken = getTurnstileToken();
            if (existingToken) {
                setTurnstileToken(existingToken);
                console.log('DemoPopup: Using existing token from storage');
            }
        }
    }, [isOpen]);

    if (!isOpen) return null;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!turnstileToken) {
            alert("Please verify you are human.");
            return;
        }

        // Validate phone number
        if (formData.phone.length !== 10) {
            alert("Please enter a valid 10-digit phone number.");
            return;
        }

        const firstDigit = parseInt(formData.phone[0]);
        if (firstDigit < 5 || firstDigit > 9) {
            alert("Phone number must start with a digit between 5-9.");
            return;
        }

        setIsSubmitting(true);

        const verification = await verifyTurnstile(turnstileToken);
        if (!verification.success) {
            alert("Captcha verification failed. Please try again.");
            setIsSubmitting(false);
            return;
        }

        // Mock Submission Delay
        // Mock Submission Delay
        // Show success popup FIRST
        setShowSuccess(true);
        setIsSubmitting(false);

        // Reset form
        setFormData({ name: '', phone: '', class: '' });

        // Console log for verification (Mock Backend)
        console.log("Demo Form Submitted:", formData);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;

        // Phone number validation: only digits, max 10, first digit 5-9
        if (name === 'phone') {
            // Remove non-digits
            const digitsOnly = value.replace(/\D/g, '');

            // Limit to 10 digits
            const limited = digitsOnly.slice(0, 10);

            // If first digit exists, ensure it's 5-9
            if (limited.length > 0) {
                const firstDigit = parseInt(limited[0]);
                if (firstDigit < 5 || firstDigit > 9) {
                    return; // Don't update if first digit is invalid
                }
            }

            setFormData({ ...formData, [name]: limited });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    if (showSuccess) {
        return (
            <SuccessPopup
                isOpen={true}
                onClose={() => {
                    setShowSuccess(false);
                    onClose();
                    onSuccess();
                }}
                title="Thank You!"
                message="We will contact you shortly."
            />
        );
    }

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
            </div>
        </div>
    );
};

export default DemoPopup;
