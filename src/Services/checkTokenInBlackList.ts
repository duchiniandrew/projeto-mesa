import { Container } from "typedi"
import { Repository } from "typeorm"

import { TokenBlackList } from "../DB/Entities/TokenBlackList"

export default function checkTokenInBlackList(token: string) {
    return Container.get<Repository<TokenBlackList>>("TokenBlackListTable").findOne({ token: token })
}