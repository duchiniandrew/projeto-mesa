import Express from "express"
import { json } from "body-parser"

import authMiddleware from "../Middlewares/Auth"
import authenticate from "../Controllers/authentication"
import addUser from "../Controllers/addUser/addUser"
import addLocal from "../Controllers/addLocal"
import getLocalsByMap from "../Controllers/getLocalsByMap"
import teste from "../Controllers/teste"

const app = Express()
app.use(json())

export default function routes() {

    app.get("/teste", authMiddleware, teste)
    app.post("/addLocal", authMiddleware, addLocal)
    app.get("/getLocalsByMap", authMiddleware, getLocalsByMap)
    app.post("/user", authMiddleware, addUser)
    app.post("/authenticate", authenticate)

    app.listen(process.env["PORT"] || 3001)
}