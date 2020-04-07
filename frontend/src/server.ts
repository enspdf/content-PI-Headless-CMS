import express, { Request, Response } from "express";
import next from "next";
import path from "path";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
import session from "express-session";
import config from "./config";
import user, { isConnected } from "./shared/lib/middlewares/user";

const dev = process.env.NODE_ENV !== "production";
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();

nextApp.prepare().then(() => {
    const app = express();

    app.use(express.static(path.join(__dirname, "../public")));
    app.use(session({
        resave: false,
        saveUninitialized: true,
        secret: config.security.secretKey
    }));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(cookieParser(config.security.secretKey));
    app.use(cors({ credentials: true, origin: true }));
    app.use(user);

    app.get("/login", isConnected(false), (req, res) => {
        return nextApp.render(req, res, "/users/login", req.query);
    });

    app.use("/dashboard", isConnected(true, ["god", "admin", "editor"], "/login?redirectTo=/dashboard"), (req, res) => {
        return nextApp.render(req, res, "/dashboard", req.query);
    });

    app.all("*", (req: Request, res: Response) => {
        return handle(req, res);
    });

    app.listen(config.server.port);
});