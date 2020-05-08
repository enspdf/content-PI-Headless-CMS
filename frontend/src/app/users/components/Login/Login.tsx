import React, { FC, useState, useContext, memo } from "react";
import { Alert, RenderIf, DarkButton, PrimaryButton, Input } from "fogg-ui";
import { cx, redirectTo } from "fogg-utils";

import { FormContext } from "@contexts/form";

import Logo from "@layouts/main/Logo";

import styles from "./Login.scss";

import { IUser } from "@interfaces";
interface IProps {
    login(input: any): any;
    currentUrl: string;
}

const Login: FC<IProps> = ({ login, currentUrl }) => {
    const [errorMessage, setErrorMessage] = useState("");
    const [invalidLogin, setInvalidLogin] = useState(false);

    const { onChange, values } = useContext(FormContext);

    const handleLogin = async (user: IUser) => {
        const response = await login(user);

        if (response.error) {
            setInvalidLogin(true);
            setErrorMessage(response.message);
        } else {
            redirectTo(currentUrl || "/");
        }
    };

    return (
        <>
            <RenderIf isTrue={invalidLogin}>
                <Alert danger center flat>
                    {errorMessage}
                </Alert>
            </RenderIf>
            <div className={styles.login}>
                <div className={styles.wrapper}>
                    <div className={styles.form}>
                        <div className={styles.logo}>
                            <Logo />
                        </div>

                        <Input
                            autoComplete="off"
                            type="email"
                            className={styles.email}
                            name="email"
                            placeholder="Email"
                            onChange={onChange}
                            value={values.email}
                        />

                        <Input
                            autoComplete="off"
                            type="password"
                            className={styles.password}
                            name="password"
                            placeholder="Password"
                            onChange={onChange}
                            value={values.password}
                        />

                        <div className={styles.actions}>
                            <div className={styles.left}>
                                <DarkButton name="login" onClick={() => handleLogin(values)}>Login</DarkButton>
                                &nbsp;
                                <PrimaryButton name="register">Register</PrimaryButton>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default memo(Login);