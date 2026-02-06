'use client';

import { useState } from 'react';
import styles from './Navigation.module.css';
import { navigationData } from '@/data/navigation';
import Link from 'next/link';
import { AreYouFastLogo } from './AreYouFastLogo';

export default function Navigation() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <nav className={styles.nav}>
            <div className={styles.container}>
                <button
                    className={styles.hamburger}
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                {/* Central Menu Items */}
                <div className={`${styles.menu} ${mobileMenuOpen ? styles.mobileMenuOpen : ''}`}>
                    {navigationData.map((item) => (
                        <div key={item.label} className={styles.menuItemWrapper}>
                            <Link
                                href={item.href}
                                className={`${styles.navLink} ${item.dropdown ? styles.hasDropdown : ''}`}
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {item.label} {item.dropdown && <span className={styles.arrow}>▼</span>}
                            </Link>

                            {item.dropdown && (
                                <div className={styles.dropdown}>
                                    {item.dropdown.map((subItem) => (
                                        <Link
                                            key={subItem.label}
                                            href={subItem.href}
                                            className={styles.dropdownItem}
                                            target={subItem.isExternal ? '_blank' : undefined}
                                            rel={subItem.isExternal ? 'noopener noreferrer' : undefined}
                                            onClick={() => setMobileMenuOpen(false)}
                                        >
                                            {subItem.label}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Extreme Right Logo */}
                <div className={styles.fastLogoWrapper}>
                    <AreYouFastLogo />
                </div>
            </div>
        </nav>
    );
}
