import React from 'react';
import { footerInfo } from '@/data/portfolio';
import styles from './Footer.module.css';

function Footer() {
    return (
        <footer className={styles.footerContainer}>
            <div>
                {footerInfo.email && (
                    <div>
                        <a>
                            {footerInfo.email}
                        </a>
                    </div>
                )}
            </div>
                
            <div>
                {footerInfo.socialLinks.map((link) => {
                    return (
                    <a 
                        key={link.name}
                        href={link.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        <span>{link.name}</span>
                    </a>
                    );
                })}
            </div>
            
        </footer>
    );
}

export default Footer;