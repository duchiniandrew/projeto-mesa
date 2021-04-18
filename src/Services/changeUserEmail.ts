import { Container } from "typedi"
import { Repository } from "typeorm"

import { User } from "../DB/Entities/User"

export default async function changeUserPasswordService(email: string, newEmail: string,) {
    await Container.get<Repository<User>>("UserTable").update({ email: email }, { email: newEmail })
    return { message: "User email successfully updated." }
}