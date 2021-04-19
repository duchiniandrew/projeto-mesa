import { Container } from "typedi"
import { Repository } from "typeorm"

import { User } from "../DB/Entities/User"

export default async function changeUserPasswordService(id: number, newEmail: string,) {
    await Container.get<Repository<User>>("UserTable").update({ id: id }, { email: newEmail })
    return { message: "User email successfully updated." }
}