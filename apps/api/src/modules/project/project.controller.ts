import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Project } from "../../entity/Project";

export class ProjectController {
    public async createProject(req: Request, res: Response) {
        const project = new Project();
        project.name = req.body.name;
        project.user = res.locals.user;
        project.archived = false;
        await getRepository(Project)
            .save(project)
            .catch((error) => res.status(400).json(error));
        return res.status(200).json(project);
    }

    public async getProjects(req: Request, res: Response) {
        const projects = await getRepository(Project)
            .find({
                where: {
                    user: res.locals.user,
                    archived: false,
                },
            })
            .catch((error) => res.status(400).json(error));

        return res.status(200).json(projects);
    }

    public async getArchivedProjects(req: Request, res: Response) {
        const projects = await getRepository(Project)
            .find({
                where: {
                    user: res.locals.user,
                    archived: true,
                },
            })
            .catch((error) => res.status(400).json(error));

        return res.status(200).json(projects);
    }

    public async getProject(req: Request, res: Response) {
        const project: any = await getRepository(Project).findOne(
            req.params.projectId
        );

        if (!project) return res.sendStatus(404);

        const user = await project.user;

        if (user.id !== res.locals.user.id) return res.sendStatus(403);

        delete project["__user__"];
        delete project["__has_user__"];

        return res.status(200).json(project);
    }

    public async updateProject(req: Request, res: Response) {
        const project: any = await getRepository(Project).findOne(
            req.params.projectId
        );
        if (!project) return res.sendStatus(404);
        const user = await project.user;
        if (user.id !== res.locals.user.id) return res.sendStatus(403);
        delete project["__user__"];
        delete project["__has_user__"];

        if (req.body.name) {
            project.name = req.body.name;
        }

        if (!project.archived && req.body.archived === true) {
            project.archived = true;
            project.archivedDate = new Date();
        }

        await getRepository(Project).save(project);

        return res.status(200).json(project);
    }

    public async deleteProject(req: Request, res: Response) {
        const project = await getRepository(Project).findOne(
            req.params.projectId
        );
        if (!project) return res.sendStatus(404);
        if ((await project.user).id !== res.locals.user.id)
            return res.sendStatus(403);
        await getRepository(Project).remove(project);
        return res.sendStatus(200);
    }
}
