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
        this.router.post("/project/:projectId/start", isUser, this.controller.startSession);
        this.router.post("/:sessionId/stop", isUser, this.controller.stopSession);
        this.router.get("/get/active", isUser, this.controller.getActiveSessions);
        this.router.get("/get/project/:projectId", isUser, this.controller.getProjectsSessions);
    }
}

export const sessionRoutes = new SessionRoutes().router;
