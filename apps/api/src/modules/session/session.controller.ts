import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Project } from "../../entity/Project";
import { Session } from "../../entity/Session";
import { formatSession } from "./session.services";

export class SessionController {
    public async startSession(req: Request, res: Response) {
        const project = await getRepository(Project).findOne(req.params.projectId);

        if (!project) return res.sendStatus(404);
        if ((await project.user).id !== res.locals.user.id) return res.sendStatus(403);

        let session = await getRepository(Session).findOne({
            where: {
                project,
                date: req.body.date,
            },
        });

        if (session) {
            if (!session.active) {
                session.active = true;
                session.startTimeStamp = Date.now();
            }
        } else {
            session = new Session();
            session.date = req.body.date;
            session.project = Promise.resolve(project);
            session.user = Promise.resolve(res.locals.user);
            session.active = true;
            session.startTimeStamp = Date.now();
        }

        await getRepository(Session).save(session);

        return res.status(200).json({ session: formatSession(session) });
    }

    public async stopSession(req: Request, res: Response) {
        const session = await getRepository(Session).findOne(req.params.sessionId);
        if (!session) return res.sendStatus(404);
        if ((await (await session.project).user).id !== res.locals.user.id)
            return res.sendStatus(403);

        session.active = false;
        session.workTime = req.body.workTime;
        session.startTimeStamp = null;

        await getRepository(Session).save(session);

        return res.status(200).json({ session: formatSession(session) });
    }

    public async getActiveSessions(req: Request, res: Response) {
        const sessions = await getRepository(Session).find({
            where: {
                user: res.locals.user,
                active: true,
            },
        });

        const activeSessions: any[] = [];

        for (const session of sessions) {
            await session.project;
            if (session.startTimeStamp)
                activeSessions.push({
                    session: formatSession(session, ["project"]),
                    duration: Math.floor((Date.now() - session.startTimeStamp) / 1000),
                });
        }

        return res.status(200).json(activeSessions);
    }

    public async getProjectsSessions(req: Request, res: Response) {
        const sessions = await getRepository(Session).find({
            where: {
                project: req.params.projectId,
                user: res.locals.user,
            },
        });

        return res.status(200).json(sessions);
    }
}
