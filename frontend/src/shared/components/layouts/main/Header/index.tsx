import React, { FC, ReactElement } from "react";
import styles from "./Header.scss";
import BreadCrumbs from "../Breadcrumbs";

const Header: FC = (): ReactElement => {
    return (
        <header className={styles.Header}>
            <BreadCrumbs />
        </header>
    );
};

export default Header;