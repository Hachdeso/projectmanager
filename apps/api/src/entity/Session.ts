import {
    Column,
    CreateDateColumn,
    Entity,
    ManyToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from "typeorm";
import { Project } from "./Project";
import { User } from "./User";

@Entity()
export class Session {
    @PrimaryGeneratedColumn()
    id!: number;

    @ManyToOne(() => Project, (project) => project.sessions, {
        onDelete: "CASCADE",
    })
    project!: Promise<Project>;

    @ManyToOne(() => User, (user) => user.sessions, {
        onDelete: "CASCADE",
    })
    user!: Promise<User>;

    @Column()
    date!: string;

    @Column({
        default: 0,
    })
    workTime!: number;

    @Column({
        nullable: true,
        type: "bigint",
    })
    startTimeStamp!: number | null;

    @Column()
    active!: boolean;

    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;
}
