import { Request } from "express"
import { Container } from "typedi"
import { Repository } from "typeorm"

import { Local } from "../DB/Entities/Local"

export default async function addLocal(req: Request) {

    const { name, description, lat, lng } = req.body

    try {
        await Container.get<Repository<Local>>("LocalTable").save({
            name: name,
            description: description,
            lat: lat,
            lng: lng
        })
        return { message: "Local added successfully." }
    }
    catch (error) {
        throw error
    }
}