'use client';

import React, { useState, useEffect } from 'react';
import styles from './LeadFormPopup.module.css';
import CloudflareCaptcha from './CloudflareCaptcha';
import SuccessPopup from './SuccessPopup';
import { verifyTurnstile } from '../actions/verifyTurnstile';
import { getTurnstileToken } from '../utils/captchaManager';

interface LeadFormPopupProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function LeadFormPopup({ isOpen, onClose }: LeadFormPopupProps) {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [turnstileToken, setTurnstileToken] = useState('');
    const [showSuccess, setShowSuccess] = useState(false);

    // Form State
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        course: '',
        message: ''
    });

    // Check for existing valid token when form opens
    useEffect(() => {
        if (isOpen) {
            const existingToken = getTurnstileToken();
            if (existingToken) {
                setTurnstileToken(existingToken);
                console.log('LeadFormPopup: Using existing token from storage');
            }
        }
    }, [isOpen]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
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

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Validate Captcha
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

        // Verify Turnstile Token
        const verification = await verifyTurnstile(turnstileToken);
        if (!verification.success) {
            alert("Captcha verification failed. Please try again.");
            setIsSubmitting(false);
            return;
        }

        // Mock Submission to Google Sheets
        console.log("Submitting Lead Form to Google Sheet (Mock):", { ...formData, turnstileToken });

        // Show success popup FIRST
        setShowSuccess(true);
        setIsSubmitting(false);

        localStorage.setItem('hasSubmittedLeadForm', 'true');

        // Reset form
        setFormData({
            name: '',
            phone: '',
            email: '',
            course: '',
            message: ''
        });
    };

    if (!isOpen) return null;

    if (showSuccess) {
        return (
            <SuccessPopup
                isOpen={true}
                onClose={() => {
                    setShowSuccess(false);
                    onClose();
                }}
                title="Thank You!"
                message="We will contact you shortly."
            />
        );
    }

    return (
        <div className={styles.overlay} onClick={onClose}>
            <div className={styles.modal} onClick={e => e.stopPropagation()}>
                <button
                    className={styles.closeButton}
                    onClick={onClose}
                    aria-label="Close form"
                >×</button>

                <div className={styles.header}>
                    <h2 className={styles.title}>Get Expert Guidance</h2>
                    <p className={styles.subtitle}>Fill the form to get a callback from our counselors.</p>
                </div>

                <form className={styles.form} onSubmit={handleSubmit}>
                    <div className={styles.inputGroup}>
                        <label htmlFor="name" className={styles.label}>Name *</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            className={styles.input}
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Full Name"
                        />
                    </div>

                    <div className={styles.inputGroup}>
                        <label htmlFor="phone" className={styles.label}>Phone Number *</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            required
                            pattern="[0-9]{10}"
                            className={styles.input}
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="10 digit number"
                        />
                    </div>

                    <div className={styles.inputGroup}>
                        <label htmlFor="email" className={styles.label}>Email *</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            pattern="[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}"
                            className={styles.input}
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="your@email.com"
                            title="Please enter a valid email address (e.g., user@example.com)"
                        />
                    </div>

                    <div className={styles.inputGroup}>
                        <label htmlFor="course" className={styles.label}>Course *</label>
                        <select
                            id="course"
                            name="course"
                            required
                            className={styles.select}
                            value={formData.course}
                            onChange={handleChange}
                        >
                            <option value="">Select Course</option>
                            <option value="JEE Advanced">JEE Advanced</option>
                            <option value="JEE Mains">JEE Mains</option>
                            <option value="NEET">NEET</option>
                            <option value="CUET">CUET</option>
                            <option value="NTSE">NTSE</option>
                            <option value="KVPY">KVPY</option>
                            <option value="RMO">RMO</option>
                            <option value="NSEP">NSEP</option>
                            <option value="NSEC">NSEC</option>
                            <option value="Olympiads">Olympiads</option>
                        </select>
                    </div>

                    <div className={styles.inputGroup}>
                        <label htmlFor="message" className={styles.label}>Message (Optional)</label>
                        <textarea
                            id="message"
                            name="message"
                            className={styles.textarea}
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Any specific query?"
                            rows={2}
                        />
                    </div>

                    {/* Cloudflare Captcha */}
                    <CloudflareCaptcha onVerify={(token) => setTurnstileToken(token)} />

                    <button type="submit" className={styles.submitButton} disabled={isSubmitting}>
                        {isSubmitting ? 'Submitting...' : 'Submit & Get Call Back'}
                    </button>
                </form>
            </div>
        </div>
    );
}
