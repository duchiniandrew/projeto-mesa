import { Container } from "typedi"
import { Repository } from "typeorm"

import { TokenBlackList } from "../DB/Entities/TokenBlackList"

export default async function logout(token: string) {
    return Container.get<Repository<TokenBlackList>>("TokenBlackListTable").save({ token: token })
}