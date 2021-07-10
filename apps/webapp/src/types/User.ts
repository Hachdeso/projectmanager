export interface User {
    token: string;
    id: string;
    email: string;
    role: "user" | "admin";
}
