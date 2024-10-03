import React from 'react';
import {heroInfo} from '../../data/portfolio';
import styles from './Hero.module.css';

function Hero() {
    return (
        <div className={styles.heroContainer}>
            <div className={styles.heroContent}>
                <p>{heroInfo.intro}</p>
                <h1>{heroInfo.name}</h1>
                <p>{heroInfo.description}</p>
            </div>
        </div>
    )
}

export default Hero
