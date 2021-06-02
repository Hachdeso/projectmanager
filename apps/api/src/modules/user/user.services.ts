import { User } from "../../entity/User";

export function formatUser(user: User) {
    const formatedUser: any = user;

    delete formatedUser.password;

    return formatedUser;
}
