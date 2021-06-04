import { Request, Response } from "express";
import { DateTime } from "luxon";

export class SessionController {
    public async createSession(req: Request, res: Response) {
        const { projectId, date } = req.body;
    }

    public async getActiveSessions(req: Request, res: Response) {}

    public async getProjectsSessions(req: Request, res: Response) {}

    public async updateSession(req: Request, res: Response) {}
}
