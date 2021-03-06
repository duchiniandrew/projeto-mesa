import Express from "express"
import { json } from "body-parser"

import authMiddleware from "../Middlewares/Auth"
import authenticate from "../Controllers/authentication"
import addUser from "../Controllers/addUser"
import addLocal from "../Controllers/addLocal"
import rateLocalById from "../Controllers/rateLocalById"
import rateLocalByName from "../Controllers/rateLocalByName"
import getLocalsByList from "../Controllers/getLocalsByList"
import getLocalsByMap from "../Controllers/getLocalsByMap"
import getLocalRates from "../Controllers/getLocalRates"
import getUserPerfil from "../Controllers/getUserPerfil"
import changeUserPassword from "../Controllers/changeUserPassword"
import changeUserEmail from "../Controllers/changeUserEmail"
import logout from "../Controllers/logout"
import { serve, setup } from 'swagger-ui-express'

import * as swaggerFile from "../api-spec.json"

const app = Express()
app.use(json())

export default function routes() {
    app.use('/api/docs', serve, setup(swaggerFile));

    app.get("/api/v1/getLocalsByList", authMiddleware, getLocalsByList)
    app.get("/api/v1/getLocalsByMap/:lat/:lng", authMiddleware, getLocalsByMap)
    app.get("/api/v1/getLocalRates/:id", authMiddleware, getLocalRates)
    app.get("/api/v1/getUserPerfil/:id", authMiddleware, getUserPerfil)
    app.get("/api/v1/logout", authMiddleware, logout)

    app.post("/api/v1/addLocal", authMiddleware, addLocal)
    app.post("/api/v1/user", addUser)
    app.post("/api/v1/authenticate", authenticate)
    app.post("/api/v1/rateLocalById", authMiddleware, rateLocalById)
    app.post("/api/v1/rateLocalByName", authMiddleware, rateLocalByName)

    app.patch("/api/v1/changeUserPassword", authMiddleware, changeUserPassword)
    app.patch("/api/v1/changeUserEmail", authMiddleware, changeUserEmail)

    app.listen(process.env.PORT || 3001)
}