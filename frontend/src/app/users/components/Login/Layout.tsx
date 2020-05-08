import React, { FC, ReactElement, useContext, memo } from "react";
import Head from "next/head";

import { UserContext } from "@contexts/user";

import Login from "./Login";
import "./Layout";

interface IProps {
    currentUrl: string;
}

const Layout: FC<IProps> = ({ currentUrl }): ReactElement => {
    const { login } = useContext(UserContext);

    return (
        <>
            <Head>
                <title>Loin</title>
                <meta name="title" content="Login" />
            </Head>
            <Login login={login} currentUrl={currentUrl} />
        </>
    );
};

export default memo(Layout);