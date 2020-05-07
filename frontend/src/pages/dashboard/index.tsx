import { ReactElement } from "react";
import { ApolloProvider } from "react-apollo-hooks";
import useApolloClient from "@shared/lib/apollo";
import AppProvider from "@contexts/app";
import UserProvider from "@contexts/user";
import FormProvider from "@contexts/form";
import DashboardLayout from "@app/dashboard/components/Layout";

const DashboardPage = (): ReactElement => (
    <ApolloProvider client={useApolloClient()}>
        <UserProvider >
            <AppProvider>
                <FormProvider>
                    <DashboardLayout />
                </FormProvider>
            </AppProvider>
        </UserProvider>
    </ApolloProvider>
);

export default DashboardPage;