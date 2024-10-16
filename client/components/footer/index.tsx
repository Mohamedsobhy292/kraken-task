import React from "react";
import styles from "./footer.module.scss";

export const Footer = () => {
    return (
        <div className={styles.footer}>
            <p className={styles.footerText}>
                octopus energy LTD is a company reigstered in England and Wales.
                Resigred nubmer: 0921231412. Registered office: 33 Holborn,
                London, EC1N 2HT. Trading office: 20-24
            </p>
        </div>
    );
};
