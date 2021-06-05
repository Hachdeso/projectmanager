import { DateTime } from "luxon";
import { Session } from "../../entity/Session";

export function formatSession(session: Session, params: string[] = []) {
    const formattedSession: any = session;

    if (params.includes("project")) {
        formattedSession.projectId = formattedSession["__project__"].id;
    }

    if (params.includes("stringDate")) {
        const dt = DateTime.local(
            parseInt(session.date.split("/")[2]),
            parseInt(session.date.split("/")[1]),
            parseInt(session.date.split("/")[0])
        );
        let weekDay = dt.setLocale("fr").weekdayLong;
        weekDay = weekDay.charAt(0).toUpperCase() + weekDay.slice(1);
        formattedSession.stringDate =
            weekDay + " " + dt.day + " " + getMonthName(session.date.split("/")[1]).toLowerCase();
    }

    delete formattedSession["__project__"];
    delete formattedSession["__has_project__"];

    delete formattedSession["__user__"];
    delete formattedSession["__has_user__"];

    return formattedSession;
}

function getMonthName(month: string) {
    let toReturn: string;

    const monthNumberArray = [
        "01",
        "02",
        "03",
        "04",
        "05",
        "06",
        "07",
        "08",
        "09",
        "10",
        "11",
        "12",
    ];
    const monthStringArray = [
        "Janvier",
        "Février",
        "Mars",
        "Avril",
        "Mai",
        "Juin",
        "Juillet",
        "Aout",
        "Septembre",
        "Octobre",
        "Novembre",
        "Décembre",
    ];

    return monthStringArray[monthNumberArray.indexOf(month)];
}

function getMonthNumber(month: string) {
    let toReturn: string;

    const monthNumberArray = [
        "01",
        "02",
        "03",
        "04",
        "05",
        "06",
        "07",
        "08",
        "09",
        "10",
        "11",
        "12",
    ];
    const monthStringArray = [
        "Janvier",
        "Février",
        "Mars",
        "Avril",
        "Mai",
        "Juin",
        "Juillet",
        "Aout",
        "Septembre",
        "Octobre",
        "Novembre",
        "Décembre",
    ];

    return monthNumberArray[monthStringArray.indexOf(month)];
}

interface SessionsByMonth {
    name: string;
    sessions: Session[];
}

export function orderSessionsByMonth(sessions: Session[]) {
    let sessionsToReturn: SessionsByMonth[] = [];

    for (const session of sessions) {
        const dateArray = session.date.split("/");
        const monthName = getMonthName(dateArray[1]) + " " + dateArray[2];
        const month = sessionsToReturn.find((month) => month.name === monthName);
        if (month) {
            month.sessions.push(formatSession(session, ["stringDate"]));
        } else {
            sessionsToReturn.push({
                name: monthName,
                sessions: [formatSession(session, ["stringDate"])],
            });
        }
    }

    if (sessionsToReturn.length === 0) return [];

    function compareMonths(a: SessionsByMonth, b: SessionsByMonth) {
        const arrayNameA = a.name.split(" ");
        const arrayNameB = b.name.split(" ");

        const yearA = parseInt(arrayNameA[1]);
        const yearB = parseInt(arrayNameB[1]);

        const monthA = parseInt(getMonthNumber(arrayNameA[0]));
        const monthB = parseInt(getMonthNumber(arrayNameB[0]));

        let comparison = 0;

        if (yearA < yearB) {
            comparison = 1;
        } else if (yearA > yearB) {
            comparison = -1;
        } else {
            if (monthA < monthB) {
                comparison = 1;
            } else {
                comparison = -1;
            }
        }

        return comparison;
    }

    function compareDays(a: Session, b: Session) {
        const dayA = parseInt(a.date.split("/")[0]);
        const dayB = parseInt(b.date.split("/")[0]);

        return dayA < dayB ? 1 : -1;
    }

    sessionsToReturn = sessionsToReturn.sort(compareMonths);

    for (const month of sessionsToReturn) {
        month.sessions = month.sessions.sort(compareDays);
    }

    return sessionsToReturn;
}
