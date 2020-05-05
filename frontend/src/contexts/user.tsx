import React, { FC, createContext, ReactElement } from "react";
import { useApolloClient } from "react-apollo-hooks";
import { useCookies } from "react-cookie";
import { getGraphQlError } from "fogg-utils";

import LOGIN_MUTATION from "@graphql/user/login.mutation";

interface IUserContext {
    login(input: any): any;
    user: any;
};

interface IProps {
    children: ReactElement;
    connectedUser?: object;
};

export const UserContext = createContext<IUserContext>({
    login: () => null,
    user: {}
});

const UserProvider: FC<IProps> = ({ children, connectedUser }): ReactElement => {
    const { mutate } = useApolloClient();
    const [, setCookie] = useCookies();


    async function login(input: { email: string; password: string; }) {
        try {
            const { data } = await mutate({
                mutation: LOGIN_MUTATION,
                variables: {
                    email: input.email,
                    password: input.password
                }
            });

            if (data) {
                setCookie("at", data.login.token, { path: "/" });

                return data.login.token;
            }
        } catch (err) {
            return getGraphQlError(err);
        }
    }

    const context = {
        login,
        user: connectedUser
    };

    return <UserContext.Provider value={context}>{children}</UserContext.Provider>
};

export default UserProvider;