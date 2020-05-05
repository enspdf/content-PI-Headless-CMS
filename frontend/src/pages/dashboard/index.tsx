import { ReactElement } from "react";
import { ApolloProvider } from "react-apollo-hooks";
import useApolloClient from "@shared/lib/apollo";
import AppProvider from "@contexts/app";
import UserProvider from "@contexts/user";
import FormProvider from "@contexts/form";
import DashboardLayout from "@app/dashboard/components/Layout";

const DashboardPage = ({ user }: { user: any }): ReactElement => (
    <ApolloProvider client={useApolloClient()}>
        <UserProvider connectedUser={user}>
            <AppProvider>
                <FormProvider>
                    <DashboardLayout />
                </FormProvider>
            </AppProvider>
        </UserProvider>
    </ApolloProvider>
);

DashboardPage.getInitialProps = ({ req }: { req: any }): any => ({
    user: req.user
});

export default DashboardPage;