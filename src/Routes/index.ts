import Express from "express"
import { json } from "body-parser"

import authMiddleware from "../Middlewares/Auth"
import authenticate from "../Controllers/authentication"
import addUser from "../Controllers/addUser/addUser"
import addLocal from "../Controllers/addLocal"
import rateLocalById from "../Controllers/rateLocalById"
import rateLocalByName from "../Controllers/rateLocalByName"
import getLocalsByList from "../Controllers/getLocalsByList"
import getLocalsByMap from "../Controllers/getLocalsByMap"
import getLocalRates from "../Controllers/getLocalRates"
import getUserPerfil from "../Controllers/getUserPerfil"
import changeUserPassword from "../Controllers/changeUserPassword"
import changeUserEmail from "../Controllers/changeUserEmail"
import updateUserPerfil from "../Controllers/updateUserPerfil"

const app = Express()
app.use(json())

export default function routes() {
    app.get("/api/v1/getLocalsByList", authMiddleware, getLocalsByList)
    app.get("/api/v1/getLocalsByMap/:lat/:lng", authMiddleware, getLocalsByMap)
    app.get("/api/v1/getLocalRates/:id", authMiddleware, getLocalRates)
    app.get("/api/v1/getUserPerfil", authMiddleware, getUserPerfil)

    app.post("/api/v1/addLocal", authMiddleware, addLocal)
    app.post("/api/v1/user", authMiddleware, addUser)
    app.post("/api/v1/authenticate", authenticate)
    app.post("/api/v1/rateLocalById", authMiddleware, rateLocalById)
    app.post("/api/v1/rateLocalByName", authMiddleware, rateLocalByName)

    app.patch("/api/v1/changeUserPassword", authMiddleware, changeUserPassword)
    app.patch("/api/v1/changeUserEmail", authMiddleware, changeUserEmail)

    app.put("/api/v1/updateUserPerfil", authMiddleware, updateUserPerfil)

    app.listen(process.env.PORT || 3001)
}