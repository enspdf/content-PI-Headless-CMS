import React, { FC, ReactElement, useContext } from "react";
import Head from "next/head";
import { UserContext } from "@contexts/user";
import Header from "@shared/components/layouts/main/Header";
import Content from "@shared/components/layouts/main/Content";
import Sidebar from "@shared/components/layouts/main/Sidebar";
import styles from "./Layout.scss";

const Layout: FC = (): ReactElement => {
    const { user } = useContext(UserContext);

    return (
        <>
            <Head>
                <title>Dashboard</title>
                <meta name="title" content="Dashboard" />
            </Head>

            <div className={styles.layout}>
                <Sidebar />

                <Content>
                    <Header />
                </Content>
            </div>
        </>
    );
};

export default Layout;