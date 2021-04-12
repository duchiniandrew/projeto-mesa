import Express, { Request, Response } from "express"
import { json } from "body-parser"

import addUser from "../Controllers/addUser/addUser"
import teste from "../Controllers/teste"

const app = Express()
app.use(json())

export default function routes() {

    app.get("/teste", teste)
    app.post("/user", addUser)

    app.listen(process.env["PORT"] || 3000)
}