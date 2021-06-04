import { Request, Response } from "express";
import { User } from "../../entity/User";
import bcrypt from "bcryptjs";
import { getRepository } from "typeorm";

export class FixturesController {
    public async userFixtures(req: Request, res: Response) {
        const user = new User();
        user.email = "iliasmangeolle39@gmail.com";
        user.password = bcrypt.hashSync("rafilias", 10);
        user.role = "user";

        const admin = new User();
        admin.email = "admin@gmail.com";
        admin.password = bcrypt.hashSync("rafilias", 10);
        admin.role = "admin";

        await getRepository(User).save([user, admin]);

        return res.sendStatus(200);
    }
}
