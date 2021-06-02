import express from "express";
import { isAdmin } from "../../middlewares/authentication/isAdmin";
import { UserController } from "./user.controller";

class UserRoutes {
    public router: express.Router;
    public userController: UserController;

    constructor() {
        this.router = express.Router();
        this.userController = new UserController();
        this.initRoutes();
    }

    private initRoutes(): void {
        this.router.post("/authenticate", this.userController.authenticate);
        this.router.post("/", this.userController.createUser);
        this.router.delete("/", isAdmin, this.userController.deleteUser);
    }
}

export const userRoutes: express.Router = new UserRoutes().router;
