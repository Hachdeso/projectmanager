import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { userRoutes } from "./modules/user/user.routes";
import { projectRoutes } from "./modules/project/project.routes";
import { fixturesRoutes } from "./modules/fixtures/fixtures.routes";
import { sessionRoutes } from "./modules/session/session.routes";

class App {
    public app: express.Application;

    constructor() {
        this.app = express();
        this.config();
        this.initRoutes();
    }

    private config(): void {
        this.app.use(bodyParser.json());
        this.app.use(cors());
    }

    private initRoutes(): void {
        this.app.use("/api/users", userRoutes);
        this.app.use("/api/projects", projectRoutes);
        this.app.use("/api/fixtures", fixturesRoutes);
        this.app.use("/api/sessions", sessionRoutes);
    }
}

export default new App().app;
