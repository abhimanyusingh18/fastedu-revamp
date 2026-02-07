import styles from './Hero.module.css';
import Image from 'next/image';
import HeadlineCarousel from './HeadlineCarousel';

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.decorativeElements}>
                <div className={`${styles.floatingElement} ${styles.element1}`}></div>
                <div className={`${styles.floatingElement} ${styles.element2}`}></div>
                <div className={`${styles.floatingElement} ${styles.element3}`}></div>
            </div>

            <div className={styles.content}>
                <div className={styles.trustContainer}>
                    <div className={styles.ratingBadge}>
                        <div className={styles.stars}>
                            {[1, 2, 3, 4, 5].map((star) => (
                                <svg key={star} viewBox="0 0 24 24" fill="currentColor" className={styles.starIcon}>
                                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                </svg>
                            ))}
                        </div>
                        <span className={styles.ratingText}>4.9/5 Average Rating</span>
                    </div>

                    <h2 className={styles.trustHeading}>
                        Students <span className={styles.loveText}>Love</span> Our Sessions
                    </h2>

                    <p className={styles.trustSubheading}>
                        Join the League of Toppers & Excel
                    </p>
                </div>

                <div className={styles.titleSection}>
                    <HeadlineCarousel />
                </div>
            </div>
        </section>
    );
}
