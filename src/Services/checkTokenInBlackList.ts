import { Container } from "typedi"
import { Repository } from "typeorm"

import { TokenBlackList } from "../DB/Entities/TokenBlackList"

export default function checkTokenInBlackList(token: string) {
    return Container.get<Repository<TokenBlackList>>("TokenBlackListTable").createQueryBuilder("TokenBlackList")
        .select(['TokenBlackList.token'])
        .where("TokenBlackList.token = :token", { token: token })
        .getOne()
}