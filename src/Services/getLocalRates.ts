import { Container } from "typedi"
import { Repository } from "typeorm"

import { LocalAnalysis } from "../DB/Entities/LocalAnalysis"
import { Local } from "../DB/Entities/Local"

export default async function getLocalRates(localId: number) {
    const localRating = await Container.get<Repository<LocalAnalysis>>("LocalAnalysisTable").findOne({ id: localId })
    return {
        ...localRating,
        localName: (await Container.get<Repository<Local>>("LocalTable").findOne({ id: localId }))?.name
    };
}