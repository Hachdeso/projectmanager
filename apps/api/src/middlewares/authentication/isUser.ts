import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { getRepository } from "typeorm";
import { JWT_KEY } from "../../config";
import { User } from "../../entity/User";

export function isUser(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers.authorization;
    const userRepository = getRepository(User);

    if (authHeader) {
        const token = authHeader.split(" ")[1];

        jwt.verify(token, JWT_KEY, (err, useri: any) => {
            if (err) {
                return res.sendStatus(403);
            }

            const user = userRepository
                .findOne({ where: { email: useri.username } })
                .then((user) => {
                    if (user) {
                        res.locals.user = user; // accessible depuis les autres controller
                        next();
                    } else {
                        res.sendStatus(403);
                    }
                })
                .catch((err) => {
                    res.sendStatus(403);
                });
        });
    } else {
        res.sendStatus(401);
    }
}
