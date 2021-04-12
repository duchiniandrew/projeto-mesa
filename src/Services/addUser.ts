import { Container } from "typedi"
import { Repository } from "typeorm"

import { User } from "../Entities/User"

export default async function addUser(name: string, email: string, password: string) {
    try {
        const UserTable = Container.get<Repository<User>>("UserTable")
        const newUser = new User(name, email, password)
        await UserTable.save(newUser)
        return "user added successfully."
    }
    catch (error) {
        throw error
    }
}