import { Container } from "typedi"
import { Repository } from "typeorm"

import { LocalAnalysis } from "../DB/Entities/LocalAnalysis"
import { Local } from "../DB/Entities/Local"
import { LocalNotFoundError } from "../Controllers/rateLocalById/errors"

export default async function rateLocalById(rate: number, comment: string, localId: number) {
    const local = await Container.get<Repository<Local>>("LocalTable").findOne({ id: localId })
    if (!local) {
        throw new LocalNotFoundError()
    }
    else {
        await Container.get<Repository<LocalAnalysis>>("LocalAnalysisTable").save({
            comments: comment,
            rating: rate,
            local: local
        })
        return { message: "Local rating save successfuly." }
    }
}