import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from "typeorm";

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

    @CreateDateColumn()
    createdAt?: Date;

    @UpdateDateColumn()
    updatedAt?: Date;
}
