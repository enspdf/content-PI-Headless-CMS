import React, { FC, ReactElement, memo } from "react";
import MyApps from "./MyApps";
import Home from "./Home";

interface IProps {
    moduleName?: string;
};

const Layout: FC<IProps> = ({ moduleName = "" }): ReactElement => {
    return (
        <>
            {moduleName === "Home" && <Home />}
            {!moduleName && <MyApps />}
        </>
    )
}

export default memo(Layout);