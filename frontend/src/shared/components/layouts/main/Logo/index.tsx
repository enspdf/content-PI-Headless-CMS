import React, { FC } from "react";
import Link from "next/link";
import styles from "./Logo.scss";

const Logo = () => {
    return (
        <div className={styles.logo}>
            <Link href="/">
                <a>
                    <img src="/images/logo.png" />
                </a>
            </Link>
        </div>
    )
}

export default Logo