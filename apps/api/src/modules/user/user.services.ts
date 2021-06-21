import { User } from "../../entity/User";

export function formatUser(user: User): Omit<User, "password" | "sessions" | "projects"> {
    return {
        id: user.id,
        email: user.email,
        role: user.role,
    };
}
