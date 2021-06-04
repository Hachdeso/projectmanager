import {
    Column,
    CreateDateColumn,
    Entity,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from "typeorm";
import { Session } from "./Session";
import { User } from "./User";

@Entity()
export class Project {
    @PrimaryGeneratedColumn()
    id!: number;

    @ManyToOne(() => User, (user) => user.projects, {
        onDelete: "CASCADE",
    })
    user!: Promise<User>;

    @OneToMany(() => Session, (session) => session.project)
    sessions!: Promise<Session[]>;

    @Column()
    name!: string;

    @Column()
    archived!: boolean;

    @Column({
        nullable: true,
    })
    archivedDate!: Date;

    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;
}
