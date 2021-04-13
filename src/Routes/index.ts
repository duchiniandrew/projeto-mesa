import Express from "express"
import { json } from "body-parser"

import authMiddleware from "../Middlewares/Auth"
import authenticate from "../Controllers/authentication"
import addUser from "../Controllers/addUser/addUser"
import addLocal from "../Controllers/addLocal"
import getLocalsByList from "../Controllers/getLocalsByList"
import getLocalsByMap from "../Controllers/getLocalsByMap"
import rateLocalById from "../Controllers/rateLocalById"
import rateLocalByName from "../Controllers/rateLocalByName"
import getLocalRates from "../Controllers/getLocalRates"

const app = Express()
app.use(json())

export default function routes() {
    app.get("/api/v1/getLocalsByList", authMiddleware, getLocalsByList)
    app.get("/api/v1/getLocalsByMap/:lat/:lng", authMiddleware, getLocalsByMap)
    app.get("/api/v1/getLocalRates/:id", authMiddleware, getLocalRates)

    app.post("/api/v1/addLocal", authMiddleware, addLocal)
    app.post("/api/v1/user", authMiddleware, addUser)
    app.post("/api/v1/authenticate", authenticate)
    app.post("/api/v1/rateLocalById", authMiddleware, rateLocalById)
    app.post("/api/v1/rateLocalByName", authMiddleware, rateLocalByName)

    app.listen(process.env["PORT"] || 3001)
}