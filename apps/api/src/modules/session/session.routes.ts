import express from "express";
import { isUser } from "../../middlewares/authentication/isUser";
import { SessionController } from "./session.controller";

class SessionRoutes {
    public router: express.Router;
    private controller: SessionController;

    constructor() {
        this.router = express.Router();
        this.controller = new SessionController();
        this.initRoutes();
    }

    private initRoutes() {
        this.router.post("/", isUser, this.controller.createSession);
        this.router.get(
            "/get/active",
            isUser,
            this.controller.getActiveSessions
        );
        this.router.get(
            "/get/project/:projectId",
            isUser,
            this.controller.getProjectsSessions
        );
        this.router.post("/:sessionId", isUser, this.controller.updateSession);
    }
}

export const sessionRoutes = new SessionRoutes().router;
