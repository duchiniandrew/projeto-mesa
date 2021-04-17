import { Container } from "typedi"
import { Repository } from "typeorm"

import { User } from "../DB/Entities/User"

export default async function getUserPerfil(userId: number) {
    return Container.get<Repository<User>>("UserTable").createQueryBuilder("user").select(['user.email', 'user.name']).getOne()
}