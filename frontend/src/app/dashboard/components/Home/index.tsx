import React, { FC, ReactElement, memo } from "react";
import MainLayout from "@layouts/main/MainLayout";

const Home: FC = (): ReactElement => {
    return (
        <MainLayout header content footer sidebar title="Home">
            <h1>Home</h1>
        </MainLayout>
    );
};

export default memo(Home);