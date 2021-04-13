import { Container } from "typedi"
import { Repository } from "typeorm"

import { LocalAnalysis } from "../DB/Entities/LocalAnalysis"

export default function getLocalRates(localId: number) {
    return Container.get<Repository<LocalAnalysis>>("LocalTable").findOne({ id: localId })
}