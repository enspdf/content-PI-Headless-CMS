import React, { FC, ReactElement, useContext } from "react";
import Head from "next/head";
import Apps from "./Apps";
import Home from "./Home";
import styles from "./Layout.scss";

interface IProps {
    moduleName?: string;
};

const Layout: FC<IProps> = ({ moduleName = "" }): ReactElement => {
    return (
        <>
            <Head>
                <title>Dashboard</title>
                <meta name="title" content="Dashboard" />
            </Head>

            <div className={styles.layout}>
                {moduleName === "Home" && <Home />}
                {!moduleName && <Apps />}
            </div>
        </>
    )
}

export default Layout