import { FixturesController } from "./fixtures.controller";
import express from "express";

class FixturesRoutes {
    public router: express.Router;
    public fixturesController: FixturesController;

    constructor() {
        this.router = express.Router();
        this.fixturesController = new FixturesController();
        this.initRoutes();
    }

    private initRoutes() {
        this.router.get("/user", this.fixturesController.userFixtures);
    }
}

export const fixturesRoutes: express.Router = new FixturesRoutes().router;
