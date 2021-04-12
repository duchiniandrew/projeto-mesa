import { Container } from "typedi"
import { Repository } from "typeorm"

import { User } from "../DB/Entities/User"

export default function getUserById(id: number) {
    return Container.get<Repository<User>>("UserTable").findOne({ id: id })
}