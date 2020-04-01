import React, { FC, ReactElement } from "react";
import Head from "next/head";

import Login from "./Login";
import "./Layout";

const Layout: FC = (): ReactElement => (
    <>
        <Head>
            <title>Loin</title>
            <meta name="title" content="Login" />
        </Head>
        <Login />
    </>
);

export default Layout;