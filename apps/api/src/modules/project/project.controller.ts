import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Project } from "../../entity/Project";
import { formatProject } from "./project.services";

export class ProjectController {
    public async createProject(req: Request, res: Response) {
        const project: any = new Project();
        project.name = req.body.name;
        project.user = res.locals.user;
        project.archived = false;
        await getRepository(Project)
            .save(project)
            .catch((error) => res.status(400).json(error));

        return res.status(200).json({ project: formatProject(project) });
    }

    public async getProjects(req: Request, res: Response) {
        const projects = await getRepository(Project).find({
            where: {
                user: res.locals.user,
                archived: false,
            },
        });

        for (let project of projects) {
            project = await formatProject(project, ["totalWorkTime"]);
        }

        return res.status(200).json(projects);
    }

    public async getArchivedProjects(req: Request, res: Response) {
        const projects = await getRepository(Project).find({
            where: {
                user: res.locals.user,
                archived: true,
            },
        });

        for (let project of projects) {
            project = await formatProject(project, ["totalWorkTime"]);
        }

        return res.status(200).json(projects);
    }

    public async getProject(req: Request, res: Response) {
        const project: any = await getRepository(Project).findOne(req.params.projectId);

        if (!project) return res.sendStatus(404);

        const user = await project.user;

        if (user.id !== res.locals.user.id) return res.sendStatus(403);

        return res.status(200).json({ project: await formatProject(project, ["totalWorkTime"]) });
    }

    public async updateProject(req: Request, res: Response) {
        const project: any = await getRepository(Project).findOne(req.params.projectId);
        if (!project) return res.sendStatus(404);
        const user = await project.user;
        if (user.id !== res.locals.user.id) return res.sendStatus(403);

        if (req.body.name) {
            project.name = req.body.name;
        }

        if (!project.archived && req.body.archived === true) {
            project.archived = true;
            project.archivedDate = new Date();
        }

        await getRepository(Project).save(project);

        return res.status(200).json({ project: formatProject(project) });
    }

    public async deleteProject(req: Request, res: Response) {
        const project = await getRepository(Project).findOne(req.params.projectId);
        if (!project) return res.sendStatus(404);
        if ((await project.user).id !== res.locals.user.id) return res.sendStatus(403);
        await getRepository(Project).remove(project);
        return res.sendStatus(200);
    }
}
