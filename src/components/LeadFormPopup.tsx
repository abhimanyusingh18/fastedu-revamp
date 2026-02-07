'use client';

import React, { useState, useEffect } from 'react';
import styles from './LeadFormPopup.module.css';
import CloudflareCaptcha from './CloudflareCaptcha';
import { verifyTurnstile } from '../actions/verifyTurnstile';

interface LeadFormPopupProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function LeadFormPopup({ isOpen, onClose }: LeadFormPopupProps) {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [turnstileToken, setTurnstileToken] = useState('');

    // Form State
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        course: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Validate Captcha
        if (!turnstileToken) {
            alert("Please verify you are human.");
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
        // In production, send formData and turnstileToken to backend for verification
        console.log("Submitting Lead Form to Google Sheet (Mock):", { ...formData, turnstileToken });

        // Simulate Network Delay
        setTimeout(() => {
            setIsSubmitting(false);
            onClose();
            localStorage.setItem('hasSubmittedLeadForm', 'true');
            alert("Thank you! We will contact you shortly.");
        }, 1500);
    };

    if (!isOpen) return null;

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
                            className={styles.input}
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="your@email.com"
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
                            <option value="JEE Mains">JEE Mains</option>
                            <option value="JEE Advanced">JEE Advanced</option>
                            <option value="NEET">NEET</option>
                            <option value="Foundation (9-10)">Foundation (9-10)</option>
                            <option value="Pre-Foundation (6-8)">Pre-Foundation (6-8)</option>
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
                    <div className={styles.captchaContainer}>
                        <CloudflareCaptcha onVerify={(token) => setTurnstileToken(token)} />
                    </div>

                    <button type="submit" className={styles.submitButton} disabled={isSubmitting}>
                        {isSubmitting ? 'Submitting...' : 'Submit & Get Call Back'}
                    </button>
                </form>
            </div>
        </div>
    );
}
