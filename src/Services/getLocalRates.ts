import { Container } from "typedi"
import { Repository } from "typeorm"

import { LocalAnalysis } from "../DB/Entities/LocalAnalysis"
import { Local } from "../DB/Entities/Local"

export default async function getLocalRates(localId: number) {
    const localRating = await Container.get<Repository<LocalAnalysis>>("LocalAnalysisTable").createQueryBuilder("LocalAnalysis")
        .select(['LocalAnalysis.rate', 'LocalAnalysis.comments'])
        .where("LocalAnalysis.id = :id", { id: localId })
        .getOne()
    return {
        ...localRating,
        ...(await Container.get<Repository<Local>>("LocalTable").createQueryBuilder("local")
            .select(['local.name'])
            .where("local.id = :id", { id: localId })
            .getOne())
    };
}