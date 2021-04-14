import { Container } from "typedi"
import { Repository } from "typeorm"

import { Local } from "../DB/Entities/Local"
import { LocalType } from "../types/Local"

export default async function addLocal(local: LocalType) {

    const { name, description, lat, lng } = local

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