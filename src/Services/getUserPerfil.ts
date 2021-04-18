import { Container } from "typedi"
import { Repository } from "typeorm"

import { User } from "../DB/Entities/User"

export default function getUserPerfil(email: string) {
    console.log(email)
    return Container.get<Repository<User>>("UserTable").createQueryBuilder("user")
        .select(['user.email', 'user.name',])
        .where("user.email = :email", { email: email }).getOne()
}