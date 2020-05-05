import React, { FC, ReactElement } from "react";
import Header from "@layouts/main/Header";
import Content from "@layouts/main/Content";
import Sidebar from "@layouts/main/Sidebar";

const Home: FC = (): ReactElement => {
    return (
        <>
            <Sidebar />
            <Content>
                <Header />
            </Content>
        </>
    );
};

export default Home;