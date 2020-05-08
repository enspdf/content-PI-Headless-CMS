import React, { FC, ReactElement, useContext, useEffect, memo } from "react";
import Head from "next/head";
import { AppContext } from "@contexts/app";
import GET_APPS_QUERY from "@graphql/apps/getApps.query";
import Logo from "@layouts/main/Logo";
import Cards from "@layouts/main/Cards";
import MainLayout from "@layouts/main/MainLayout";
import styles from "./MyApps.scss";

const MyApps: FC = (): ReactElement => {
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
        <MainLayout title="MyApps">
            <div className={styles.myApps}>
                <div className={styles.header}>
                    <div className={styles.logo}>
                        <Logo />
                    </div>
                </div>

                <Cards items={state.getApps} />
            </div>
        </MainLayout>
    )
};

export default memo(MyApps);