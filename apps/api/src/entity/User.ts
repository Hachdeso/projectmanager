import {
    Column,
    CreateDateColumn,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from "typeorm";
import { Project } from "./Project";
import { Session } from "./Session";

type UserRole = "admin" | "user";

@Entity()
export class User {
    @PrimaryGeneratedColumn("uuid")
    id!: string;

    @Column({
        unique: true,
    })
    email!: string;

    @Column({
        type: "enum",
        enum: ["admin", "user"],
        default: "user",
    })
    role!: UserRole;

    @Column()
    password!: string;

    @OneToMany(() => Project, (project) => project.user)
    projects!: Promise<Project[]>;

    @OneToMany(() => Session, (session) => session.user)
    sessions!: Promise<Session[]>;

    @CreateDateColumn()
    createdAt?: Date;

    @UpdateDateColumn()
    updatedAt?: Date;
}
