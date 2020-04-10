import React, { FC, ReactElement } from "react";
import Footer from "../Footer";
import Fields from "../Fields";
import styles from "./Content.scss";

interface IProps {
    children: ReactElement;
};

const content: FC<IProps> = ({ children }): ReactElement => (
    <section className={styles.content}>
        {children}
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <h1>Dashboard</h1>
                <p>Content</p>
            </div>
            <Fields />
        </div>
        <Footer />
    </section >
);

export default content;