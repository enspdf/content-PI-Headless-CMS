import React, { FC, memo } from "react";
import Link from "@ui/Link";
import styles from "./Logo.scss";

const Logo = () => {
    return (
        <div className={styles.logo}>
            <Link href="/dashboard">
                <img src="/images/logo.png" />
            </Link>
        </div>
    )
}

export default memo(Logo);