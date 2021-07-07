import { Request, response, Response } from "express";
import { User } from "../../entity/User";
import bcrypt from "bcryptjs";
import { getRepository, Repository } from "typeorm";
import jwt from "jsonwebtoken";
import { JWT_DURATION, JWT_KEY } from "../../config";
import { formatUser } from "./user.services";

export class UserController {
    public async authenticate(req: Request, res: Response) {
        const userRepository = getRepository(User);

        const user = await userRepository.findOne({
            where: { email: req.body.email },
        });

        if (!user)
            return res.status(403).json({ message: "Nom de compte ou mot de passe incorrect" });

        if (bcrypt.compareSync(req.body.password, user.password)) {
            const token = jwt.sign({ username: user.email }, JWT_KEY, {
                algorithm: "HS256",
                expiresIn: JWT_DURATION,
            });

            res.status(200).json({ user: formatUser(user), token });
        } else {
            return res.status(403).json({ message: "Mot de passe incorrect" });
        }
    }

    public async getUser(req: Request, res: Response) {
        res.status(200).json({ user: formatUser(res.locals.user) });
    }

    public async createUser(req: Request, res: Response) {
        const { email, password } = req.body;
        const user = new User();
        user.email = email;
        user.password = bcrypt.hashSync(password, 10);
        await getRepository(User)
            .save(user)
            .catch((error) => res.status(400).json(error));

        res.status(200).json({ user: formatUser(user) });
    }

    public async deleteUser(req: Request, res: Response) {
        const user = await getRepository(User).findOne(req.params.userId);
        if (!user) return res.sendStatus(404);
        if (res.locals.user.role !== "admin" && res.locals.user.id !== user.id)
            return res.sendStatus(403);
        await getRepository(User).remove(user);
        res.sendStatus(200);
    }
}
