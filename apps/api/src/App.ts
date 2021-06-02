import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { userRoutes } from "./modules/user/user.routes";

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
    }
}

export default new App().app;
