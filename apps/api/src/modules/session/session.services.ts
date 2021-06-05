import { Session } from "../../entity/Session";

export function formatSession(session: Session, params: string[] = []) {
    const formattedSession: any = session;

    if (params.includes("project")) {
        formattedSession.projectId = formattedSession["__project__"].id;
    }

    delete formattedSession["__project__"];
    delete formattedSession["__has_project__"];

    delete formattedSession["__user__"];
    delete formattedSession["__has_user__"];

    return formattedSession;
}
