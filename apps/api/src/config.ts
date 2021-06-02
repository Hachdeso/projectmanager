import dotenv from "dotenv";

dotenv.config();

export const JWT_KEY: string = getEnv("JWT_KEY");
export const JWT_DURATION: number = parseInt(getEnv("JWT_DURATION"));

function getEnv(key: string, def?: string): string {
    return process.env[key] ? <string>process.env[key] : def || "";
}
