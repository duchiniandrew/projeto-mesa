import { Container } from "typedi"
import { Repository } from "typeorm"

import { LocalAnalysis } from "../DB/Entities/LocalAnalysis"
import { Local } from "../DB/Entities/Local"
import { LocalNotFoundError } from "../Controllers/rateLocalByName/errors"

export default async function rateLocalByName(rate: number, comment: string, localName: string) {
    const local = await Container.get<Repository<Local>>("LocalTable").createQueryBuilder("local")
        .select(['local.id'])
        .where("local.name = :name", { name: localName })
        .getOne()

    if (!local) {
        throw new LocalNotFoundError()
    }
    else {
        await Container.get<Repository<LocalAnalysis>>("LocalAnalysisTable").save({
            comments: comment,
            rate: rate,
            local: local
        })
        return { message: "Local rate save successfuly." }
    }
}