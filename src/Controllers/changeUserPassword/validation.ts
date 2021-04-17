import { Request } from "express";

import { EmptyPasswordError, FormatPasswordError, SamePasswordError } from "./errors"
import { Container } from "typedi"
import { Repository } from "typeorm"

import { User } from "../..//DB/Entities/User"

export default async function validation(req: Request) {
    if (req.body.newPassword === "") {
        throw new EmptyPasswordError()
    }
    if (req.body.newPassword.length < 8 && /^[0-9a-zA-Z]+$/.test(req.body.newPassword)) {
        throw new FormatPasswordError()
    }
    if (await Container.get<Repository<User>>("UserTable").findOne({ id: req.body.userId, password: req.body.newPassword })) {
        throw new SamePasswordError()
    }
}