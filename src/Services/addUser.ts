import { Container } from "typedi"
import { Repository } from "typeorm"

import { User } from "../DB/Entities/User"

export default async function addUser(name: string, email: string, password: string) {
    try {
        const newUser = new User(name, email, password)
        await Container.get<Repository<User>>("UserTable").save(newUser)
        return { message: "User added successfully." }
    }
    catch (error) {
        throw error
    }
}