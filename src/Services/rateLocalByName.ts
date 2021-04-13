import { Container } from "typedi"
import { Repository } from "typeorm"

import { LocalAnalysis } from "../DB/Entities/LocalAnalysis"
import { Local } from "../DB/Entities/Local"
import { EmptyLocalNameParameterError } from "../Controllers/rateLocalByName/errors"

export default async function rateLocalByName(rate: number, comment: string, localName: string) {
    const local = await Container.get<Repository<Local>>("LocalTable").findOne({ name: localName })

    if (!local) {
        throw new EmptyLocalNameParameterError()
    }
    else {
        await Container.get<Repository<LocalAnalysis>>("LocalAnalysisTable").save({
            comments: comment,
            rating: rate,
            local: local
        })
        return "Local rating save successfuly."
    }
}