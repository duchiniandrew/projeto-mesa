import { Container } from "typedi"
import { Repository } from "typeorm"

import { Local } from "../DB/Entities/Local"

export default async function getLocals() {
    const locals = await Container.get<Repository<Local>>("LocalTable").find({})

    locals.sort((a, b) => {
        if (a.name > b.name) {
            return 1
        }
        else if (a.name < b.name) {
            return -1
        }
        else {
            return 0
        }
    })
    return locals
}