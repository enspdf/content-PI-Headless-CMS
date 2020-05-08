import React, { FC, ReactElement, useState, memo } from "react";
import { Icon, Modal } from "fogg-ui";
import Link from "@ui/Link";
import styles from "./Cards.scss";
import CreateAppModal from "@layouts/main/Modals/CreateAppModal";
import AppIcon from "../AppIcon";

interface IProps {
    items: any[]
};

const Cards: FC<IProps> = ({ items }): ReactElement => {
    const [isOpen, setIsOpen] = useState(false);
    const title = "My Apps";

    const handleModal = () => setIsOpen(!isOpen);

    return (
        <>
            <CreateAppModal label="Create New App" isOpen={isOpen} onClose={handleModal} options={{ position: "center", width: "400px" }} />

            <section className={styles.cards}>
                <h1>{title}</h1>
                <ul>
                    {items.map(app => {
                        return (
                            <li key={app.id}>
                                <Link href={`/dashboard/${app.id}/master`}>
                                    <section className={styles.card} title={app.description}>
                                        <AppIcon app={app} />
                                    </section>
                                </Link>
                            </li>
                        )
                    })}
                    <li>
                        <section className={styles.card} onClick={handleModal}>
                            <section className={styles.app}>
                                <Icon type="fas fa-plus" />
                            </section>
                            <span className={styles.createNewApp}>Create New App</span>
                        </section>
                    </li>
                </ul>
            </section>
        </>
    );
};

export default memo(Cards);