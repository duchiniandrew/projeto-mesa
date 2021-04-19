import { Request } from "express";

import { EmptyEmailError, FormatEmailError, SameEmailError } from "./errors"
import { Container } from "typedi"
import { Repository } from "typeorm"

import { User } from "../../DB/Entities/User"

export default async function validation(req: Request) {
    if (req.body.newEmail === "") {
        throw new EmptyEmailError()
    }
    //TODO check if email is like email@email.com
    // if (req.body.newEmail.length < 8 && /^[0-9a-zA-Z]+$/.test(req.body.newPassword)) {
    //     throw new FormatEmailError()
    // }
    const user = await Container.get<Repository<User>>("UserTable").findOne({ id: req.body.userId })
    
    if (user && user.email === req.body.newEmail) {
        throw new SameEmailError()
    }
}