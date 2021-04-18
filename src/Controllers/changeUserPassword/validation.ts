import { Request } from "express";

import { EmptyPasswordError, FormatPasswordError, SamePasswordError } from "./errors"
import { Container } from "typedi"
import { Repository } from "typeorm"
import testPassword from "../../Utils/validatePassword"
import getEmailFromToken from "../../Services/getEmailFromToken"

import { User } from "../../DB/Entities/User"

export default async function validation(req: Request) {

    const { newPassword } = req.body

    if (newPassword === "") {
        throw new EmptyPasswordError()
    }
    if (newPassword.length < 8 || !testPassword(newPassword)) {
        throw new FormatPasswordError()
    }
    if (await Container.get<Repository<User>>("UserTable").findOne({ email: getEmailFromToken(req), password: newPassword })) {
        throw new SamePasswordError()
    }
}