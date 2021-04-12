import { createConnection } from "typeorm"
import { Container } from "typedi"

import Routes from "../Routes"
import { User } from "../Entities/User"

createConnection({
    type: process.env.dbType,
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "postgres",
    database: "Mesa",
    entities: [
        User
    ],
    synchronize: true,
    logging: false
}).then(connection => {
    Container.set("UserTable", connection.getRepository(User))
    Routes()
})