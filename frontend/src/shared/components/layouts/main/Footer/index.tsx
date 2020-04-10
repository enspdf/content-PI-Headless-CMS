import React, { FC, ReactElement } from "react";
import styles from "./Footer.scss";

const Footer: FC = (): ReactElement => (
    <footer className={styles.footer}>
        <div className={styles.content}>
            <div>&copy; ContentPI.com {new Date().getFullYear()}</div>

            <nav className={styles.rightOptions}>
                <ul>
                    <li>
                        <a href="#">Blog</a>
                    </li>
                    <li>
                        <a href="#">Documentation</a>
                    </li>
                    <li>
                        <a href="#">Contact</a>
                    </li>
                </ul>
            </nav>
        </div>
    </footer>
);

export default Footer;