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
    
    const user = await Container.get<Repository<User>>("UserTable").createQueryBuilder("user")
        .select(['user.email'])
        .where("user.id = :id", { id: req.body.userId })
        .getOne()
    
    if (user && user.email === req.body.newEmail) {
        throw new SameEmailError()
    }
}