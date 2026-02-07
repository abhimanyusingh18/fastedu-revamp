'use client';

import styles from './page.module.css';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

export default function FoundersPage() {
    const founders = [
        {
            name: 'Kartikey Mishra',
            role: 'Founder & Physics Wizard',
            image: '/images/faculty/kartikey-mishra.png',
            bio: "An IIT Roorkee alumnus who cracked JEE Advanced, Mains (AIR 1566), and KVPY (AIR 764) in his first attempt. Former faculty at top Kota institutes, he makes physics feel like an enlightening experience.",
            tags: ['B.Tech IIT Roorkee', 'JEE Adv AIR 1500', 'Physics Expert']
        },
        {
            name: 'Paritosh Mishra',
            role: 'Founder & Chemistry Expert',
            image: '/images/faculty/paritosh-mishra.png',
            bio: "A NIT Jaipur graduate with top scores in JEE Mains (99%ile in Chemistry), BITSAT, and VIT. He simplifies complex concepts and motivates students to dream big.",
            tags: ['B.Tech NIT Jaipur', 'JEE Mains 99%ile', 'Chemistry Guru']
        },
        {
            name: 'Pragyan Mishra',
            role: 'Founder & Maths Mentor',
            image: '/images/faculty/pragyan-mishra.png',
            bio: "The friendly mathematics topper with vast experience teaching SAT and engineering math. He knows how to make learning super fun and easy for every student.",
            tags: ['B.Tech Topper', 'Maths Expert', 'Student Favorite']
        }
    ];

    const trustPoints = [
        {
            icon: '🛡️',
            title: 'Safety First',
            text: 'A secure and monitored environment where your child can learn worry-free.'
        },
        {
            icon: '📚',
            title: 'Quality Education',
            text: 'Founded by IITians/NITians who have cracked the distinct exams themselves.'
        },
        {
            icon: '💰',
            title: 'Affordable Fees',
            text: 'Top-notch education made accessible without breaking the bank.'
        },
        {
            icon: '👀',
            title: 'Parental Feedback',
            text: 'Tools to monitor progress and ensure your child is thriving.'
        }
    ];

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.2
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add(styles.trustItemVisible);
                    // Stop observing once animated
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        const trustItems = document.querySelectorAll(`.${styles.trustItem}`);
        trustItems.forEach(item => observer.observe(item));

        return () => observer.disconnect();
    }, []);

    return (
        <main className={styles.container}>
            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={styles.heroBackground} />
                <div className={styles.heroContent}>
                    <span className={styles.badge}>MEET THE VISIONARIES</span>
                    <h1 className={styles.title}>Superheroes of Education</h1>
                    <p className={styles.subtitle}>
                        Founded by IITians and NITians who are here to make learning super fun, easy, and inspiring.
                        We don't just teach; we ignite the spark of success.
                    </p>
                </div>
            </section>

            {/* Founders Grid */}
            <section className={styles.foundersSection}>
                <div className={styles.grid}>
                    {founders.map((founder, index) => (
                        <div key={founder.name} className={styles.card}>
                            <div className={styles.imageWrapper}>
                                <Image
                                    src={founder.image}
                                    alt={founder.name}
                                    fill
                                    className={styles.profileImage}
                                />
                            </div>
                            <h2 className={styles.name}>{founder.name}</h2>
                            <div className={styles.role}>{founder.role}</div>
                            <p className={styles.bio}>{founder.bio}</p>
                            <div className={styles.stats}>
                                {founder.tags.map(tag => (
                                    <span key={tag} className={styles.statBadge}>{tag}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Trust Section */}
            <section className={styles.trustSection}>
                <div className={styles.trustContainer}>
                    <div className={styles.heroContent} style={{ marginBottom: '2rem' }}>
                        <h2 className={styles.title} style={{ fontSize: '2.5rem' }}>Why Parents Trust Us</h2>
                        <p className={styles.subtitle}>
                            We know what it's like to be a parent. Here's our promise to you.
                        </p>
                    </div>
                    <div className={styles.trustGrid}>
                        {trustPoints.map((point, index) => (
                            <div
                                key={point.title}
                                className={styles.trustItem}
                                style={{ transitionDelay: `${index * 150}ms` }}
                            >
                                <div className={styles.iconBox}>{point.icon}</div>
                                <h3 className={styles.trustTitle}>{point.title}</h3>
                                <p className={styles.trustText}>{point.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
