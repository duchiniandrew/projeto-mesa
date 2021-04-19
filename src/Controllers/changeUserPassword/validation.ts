import { Request } from "express";

import { EmptyPasswordError, FormatPasswordError, SamePasswordError } from "./errors"
import { Container } from "typedi"
import { Repository } from "typeorm"
import testPassword from "../../Utils/validatePassword"

import { User } from "../../DB/Entities/User"

export default async function validation(req: Request) {

    const { newPassword } = req.body

    if (newPassword === "") {
        throw new EmptyPasswordError()
    }
    if (newPassword.length < 8 || !testPassword(newPassword)) {
        throw new FormatPasswordError()
    }
    if (await Container.get<Repository<User>>("UserTable").createQueryBuilder("user")
        .select(['user.id'])
        .where("user.id = :id", { id: req.body.userId })
        .andWhere("user.password = :password", { password: newPassword })
        .getOne()) {

        throw new SamePasswordError()
    }
}