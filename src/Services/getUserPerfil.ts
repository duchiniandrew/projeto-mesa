import { Container } from "typedi"
import { Repository } from "typeorm"

import { User } from "../DB/Entities/User"

export default function getUserPerfil(id: number) {
    return Container.get<Repository<User>>("UserTable").createQueryBuilder("user")
        .select(['user.email', 'user.name'])
        .where("user.id = :id", { id: id }).getOne()
}