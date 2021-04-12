import { Container } from "typedi"
import { Repository } from "typeorm"

import { User } from "../Entities/User"

export default function getUserById(id: number) {
    const UserTable = Container.get<Repository<User>>("UserTable")
    return UserTable.findOne({ id: id })
}