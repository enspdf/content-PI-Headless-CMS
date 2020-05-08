import React, { FC, ReactElement, memo } from "react";
import Head from "next/head";
import Content from "../Content";
import Sidebar from "../Sidebar";
import styles from "./MainLayout.scss";

interface IProps {
    children: ReactElement;
    header?: boolean;
    sidebar?: boolean;
    content?: boolean;
    footer?: boolean;
    title?: string;
};

const MainLayout: FC<IProps> = ({
    children,
    header,
    sidebar,
    content,
    footer,
    title
}): ReactElement => {
    return (
        <>
            <Head>
                <title>Dashboard {title ? `- ${title}` : ""}</title>
                <meta name="title" content={`Dashboard ${title ? `- ${title}` : ""}`} />
            </Head>

            <div className={styles.layout}>
                {sidebar && <Sidebar />}
                {content && (
                    <Content header={header} footer={footer}>
                        {children}
                    </Content>
                )}
                {!content && children}
            </div>
        </>
    );
};

export default memo(MainLayout);