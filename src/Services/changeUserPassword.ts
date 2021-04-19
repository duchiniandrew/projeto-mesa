import { Container } from "typedi"
import { Repository } from "typeorm"

import { User } from "../DB/Entities/User"

export default async function changeUserPasswordService(newPassword: string, id: number) {
    await Container.get<Repository<User>>("UserTable").update({ id: id }, { password: newPassword })
    return { message: "User password successfully updated." }
}