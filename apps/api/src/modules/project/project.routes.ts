import express from "express";
import { isAdmin } from "../../middlewares/authentication/isAdmin";
import { isUser } from "../../middlewares/authentication/isUser";
import { ProjectController } from "./project.controller";

class ProjectRoutes {
    public router: express.Router;
    public projectController: ProjectController;

    constructor() {
        this.router = express.Router();
        this.projectController = new ProjectController();
        this.initRoutes();
    }

    private initRoutes(): void {
        this.router.post("/", isUser, this.projectController.createProject);
        this.router.get(
            "/:projectId",
            isUser,
            this.projectController.getProject
        );
        this.router.get("/", isUser, this.projectController.getProjects);
        this.router.get(
            "/get/archived",
            isUser,
            this.projectController.getArchivedProjects
        );
        this.router.patch(
            "/:projectId",
            isUser,
            this.projectController.updateProject
        );
        this.router.delete(
            "/:projectId",
            isUser,
            this.projectController.deleteProject
        );
    }
}

export const projectRoutes: express.Router = new ProjectRoutes().router;
