import { Container } from "typedi"
import { Repository } from "typeorm"

import { User } from "../DB/Entities/User"

export default async function changeUserPasswordService(newEmail: string, userId: number) {
    await Container.get<Repository<User>>("UserTable").save({ id: userId, email: newEmail })
    return { message: "User email successfully updated." }
}