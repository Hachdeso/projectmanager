import {
    Column,
    CreateDateColumn,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from "typeorm";
import { Project } from "./Project";

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

    @OneToMany(() => Project, project => project.user)
    projects!: Project[]

    @CreateDateColumn()
    createdAt?: Date;

    @UpdateDateColumn()
    updatedAt?: Date;
}
