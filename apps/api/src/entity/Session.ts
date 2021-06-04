import {
    Column,
    CreateDateColumn,
    Entity,
    ManyToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from "typeorm";
import { Project } from "./Project";

@Entity()
export class Session {
    @PrimaryGeneratedColumn()
    id!: number;

    @ManyToOne(() => Project, (project) => project.sessions, {
        onDelete: "CASCADE",
    })
    project!: Promise<Project>;

    @Column()
    date!: string;

    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;
}
