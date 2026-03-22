import React from 'react';
import Link from 'next/link';
import styles from './Footer.module.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.logoSection}>
                    <img
                        src="https://ngpkpjqdwffgxocrakae.supabase.co/storage/v1/object/public/quiz-images/logo.webp?v=1769782140"
                        alt="ponpon"
                        className={styles.logo}
                    />
                </div>
                
                <div className={styles.links}>
                    <Link href="/privacy" className={styles.link}>
                        개인정보 처리 방침
                    </Link>
                </div>

                <div className={styles.contact}>
                    <p>비즈니스 문의: <a href="mailto:myc0058@gmail.com">myc0058@gmail.com</a></p>
                </div>

                <div className={styles.copyright}>
                    <p>© {currentYear} PonPon. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
