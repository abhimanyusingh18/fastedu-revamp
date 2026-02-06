import styles from './Footer.module.css';
import Image from 'next/image';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.logo}>
                        <div className={styles.logoIcon}>
                            <Image
                                src="/images/logo-footer.png"
                                alt="FAST Logo"
                                width={150}
                                height={75}
                                className={styles.logoImage}
                            />
                        </div>
                    </div>

                    <div className={styles.about}>
                        <p>
                            Offline coaching founded by IITians and NITians for JEE, NEET,
                            CUET, Olympiads & Boards in Crossings Republik and Gaur City.
                            Class 6th to 12th. Setting a new standard. No need to go far
                            distances or take online courses when the best is at your
                            doorstep.
                        </p>
                    </div>
                </div>

                <div className={styles.contact}>
                    <h3 className={styles.sectionTitle}>REACH OUT TO US</h3>

                    <div className={styles.contactGrid}>
                        <div className={styles.contactItem}>
                            <svg
                                className={styles.icon}
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
                                    fill="currentColor"
                                />
                            </svg>
                            <div>
                                <p>Head Office- 3rd Floor, Panchsheel Square Mall, Crossing Republik, Ghaziabad</p>
                                <p>Branch- Villa no. 7 GH7, Crossing Republic</p>
                            </div>
                        </div>

                        <div className={styles.contactItem}>
                            <svg
                                className={styles.icon}
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"
                                    fill="currentColor"
                                />
                            </svg>
                            <div>
                                <p>7007273922</p>
                                <p>7011494701</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.copyright}>
                    <p>Copyright © 2023 FASTEDUVENTURES</p>
                </div>
            </div>
        </footer>
    );
}
