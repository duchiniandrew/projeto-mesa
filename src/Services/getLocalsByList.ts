import { Container } from "typedi"
import { Repository } from "typeorm"

import { Local } from "../DB/Entities/Local"

export default function getLocals() {
    return Container.get<Repository<Local>>("LocalTable").find({})
}