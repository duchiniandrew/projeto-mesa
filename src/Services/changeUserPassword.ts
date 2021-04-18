import { Container } from "typedi"
import { Repository } from "typeorm"

import { User } from "../DB/Entities/User"

export default async function changeUserPasswordService(newPassword: string, email: string) {
    await Container.get<Repository<User>>("UserTable").update({ email: email }, { password: newPassword })
    return { message: "User password successfully updated." }
}