import React, { FC, ReactElement } from "react";
import Footer from "../Footer";
import Header from "../Header";
import styles from "./Content.scss";

interface IProps {
    header?: boolean;
    footer?: boolean;
    children: ReactElement;
};

const content: FC<IProps> = ({ children, header, footer }): ReactElement => (
    <section className={styles.content}>
        {header && <Header />}
        <div className={styles.container}>
            <div className={styles.wrapper}>
                {children}
            </div>
        </div>
        {footer && <Footer />}
    </section >
);

export default content;