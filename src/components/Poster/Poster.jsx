import React from 'react'

import styles from "../../styles/Home.module.css";

import BG from "../../images/computer.png";


const Poster = () => (
    <section className={styles.home}>
        <div className={styles.title}>BIG SALE 20%</div>

        <div className={styles.product}>
            <div className={styles.text}>
                <div className={styles.subtitle}>the bestseller of 2024</div>
                <h1 className={styles.head}>iPhone 14 PRO, 5G, A16 Bionic chip</h1>
                <button className={styles.button}>Buynow</button>
            </div>
            <div className={styles.image}>
                <img src={BG} alt="" />
            </div>
        </div>
    </section>
);

export default Poster