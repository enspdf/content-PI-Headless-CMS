import React, { FC, ReactElement, useContext, useEffect } from "react";
import Head from "next/head";
import { AppContext } from "@contexts/app";
import GET_APPS_QUERY from "@graphql/apps/getApps.query";
import Logo from "@layouts/main/Logo";
import Cards from "@layouts/main/Cards";
import styles from "./Apps.scss";

const Apps: FC = (): ReactElement => {
    const { get, state } = useContext(AppContext);

    useEffect(() => {
        if (!state.getApps) {
            fetch();
        }
    }, [state]);

    const fetch = async () => {
        await get({
            query: GET_APPS_QUERY
        });
    }

    if (!state.getApps) {
        return <div />
    }

    return (
        <>
            <Head>
                <title>Dashboard</title>
                <meta name="title" content="Dashboard" />
            </Head>

            <div className={styles.apps}>
                <div className={styles.header}>
                    <div className={styles.logo}>
                        <Logo />
                    </div>
                </div>

                <Cards items={state.getApps} />
            </div>
        </>
    )
};

export default Apps;