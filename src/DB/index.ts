import { createConnection } from "typeorm"
import { Container } from "typedi"

import Routes from "../Routes"
import { User } from "./Entities/User"
import { Local } from "./Entities/Local"
import { LocalAnalysis } from "./Entities/LocalAnalysis"
import { TokenBlackList } from "./Entities/TokenBlackList"

export default function db() {

    createConnection().then(connection => {
        Container.set("UserTable", connection.getRepository(User))
        Container.set("LocalTable", connection.getRepository(Local))
        Container.set("LocalAnalysisTable", connection.getRepository(LocalAnalysis))
        Container.set("TokenBlackListTable", connection.getRepository(TokenBlackList))
        Routes()
    }).catch(e => {
        console.log(e)
    })
}