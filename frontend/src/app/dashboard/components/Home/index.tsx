import React, { FC, ReactElement } from "react";
import Header from "@shared/components/layouts/main/Header";
import Content from "@shared/components/layouts/main/Content";
import Sidebar from "@shared/components/layouts/main/Sidebar";

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