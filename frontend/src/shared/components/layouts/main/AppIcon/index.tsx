import React, { FC, ReactElement, memo } from "react";
import styles from "./AppIcon.scss";

interface IProps {
    app: any;
    hideName?: boolean;
}

const AppIcon: FC<IProps> = ({ app, hideName }): ReactElement => {
    return (
        <>
            <div className={styles.appIcon} style={{ backgroundColor: app.icon }} title={app.appName}>
                {app.appName.substring(0, 2)}
            </div>

            {!hideName && <span className={styles.iconName}>{app.appName}</span>}
        </>
    );
};

export default memo(AppIcon);