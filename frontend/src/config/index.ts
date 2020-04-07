import common from "./common.json";
import local from "./local.json";
import production from "./production.json";

interface IConfig {
    baseUrl: string;
    api: {
        uri: string;
        credentials: string;
    }
    debug: boolean;
    cache: {
        enable: boolean;
    }
    session: {
        cookieDomain: string;
        maxAge: number;
        cookiePrefix: string;
        path: string;
        httpOnly: boolean;
    }
    server: {
        port: number;
    }
    languages: {
        default: string;
        list: string[];
    }
    security: {
        secretKey: string;
        expiresIn: string;
    }
}

let env = "local";

if (process.env.NODE_ENV && process.env.NODE_ENV !== "development") {
    env = process.env.NODE_ENV;
}

let config: IConfig = {
    ...common,
    ...(env === "local" ? local : production)
}

export const isLocal = () => env === "local";
export const isProduction = () => env === "production";

export default config;