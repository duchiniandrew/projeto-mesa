import { Container } from "typedi"
import { Repository } from "typeorm"

import { User } from "../DB/Entities/User"

export default function signInUserByEmailAndPassword(email: string, password: string) {
    return Container.get<Repository<User>>("UserTable").findOne({ email: email, password: password })
}