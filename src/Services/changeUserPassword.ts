import { Container } from "typedi"
import { Repository } from "typeorm"

import { User } from "../DB/Entities/User"

export default async function changeUserPasswordService(newPassword: string, userId: number) {
    await Container.get<Repository<User>>("UserTable").save({ id: userId, password: newPassword })
    return { message: "User password successfully updated." }
}