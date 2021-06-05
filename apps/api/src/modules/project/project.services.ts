import { Project } from "../../entity/Project";

export async function formatProject(project: Project, params: string[] = []) {
    const formattedProject: any = project;

    if (params.includes("totalWorkTime")) {
        formattedProject.totalWorkTime = 0;
        for (const session of await project.sessions) {
            formattedProject.totalWorkTime += session.workTime;
        }
    }

    delete formattedProject["__user__"];
    delete formattedProject["__has_user__"];

    delete formattedProject["__sessions__"];
    delete formattedProject["__has_sessions__"];

    return formattedProject;
}
