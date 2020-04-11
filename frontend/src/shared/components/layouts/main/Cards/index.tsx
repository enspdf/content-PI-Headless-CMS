import React, { FC, ReactElement, useState } from "react";
import { Icon, Modal } from "fogg-ui";
import Link from "@shared/components/ui/Link";
import styles from "./Cards.scss";

interface IProps {
    items: any[]
};

const Cards: FC<IProps> = ({ items }): ReactElement => {
    const [isOpen, setIsOpen] = useState(false);
    const title = "My Apps";

    const handleModal = () => setIsOpen(!isOpen);

    return (
        <>
            <Modal isOpen={isOpen} label="Create New App" options={{ position: "center", width: "400px" }} onClose={handleModal}>
                <p>Content</p>
            </Modal>

            <section className={styles.cards}>
                <h1>{title}</h1>
                <ul>
                    {items.map(app => {
                        return (
                            <li key={app.id}>
                                <Link href={`/dashboard/${app.id}/master`}>
                                    <section className={styles.card} title={app.description}>
                                        <section className={styles.app} style={{ backgroundColor: app.icon }}>
                                            {app.appName.substring(0, 2)}
                                        </section>
                                        <span>{app.appName}</span>
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
                            <span>Create New App</span>
                        </section>
                    </li>
                </ul>
            </section>
        </>
    );
};

export default Cards;