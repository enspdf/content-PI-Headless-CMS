import { ApolloProvider } from "react-apollo-hooks";
import useApolloClient from "@shared/lib/apollo";
import AppProvider from "@contexts/app";
import UserProvider from "@contexts/user";
import DashboardLayout from "@app/dashboard/components/Layout";

export default () => (
    <ApolloProvider client={useApolloClient()}>
        <UserProvider>
            <AppProvider>
                <DashboardLayout moduleName="Home" />
            </AppProvider>
        </UserProvider>
    </ApolloProvider>
);