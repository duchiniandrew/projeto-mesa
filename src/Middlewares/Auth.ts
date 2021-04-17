import { Request, Response, NextFunction } from "express"
import jwt from "jsonwebtoken"

import checkTokenInBlackList from "../Services/checkTokenInBlackList"

export default async function authenticateToken(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]

    if (!token) {
        return res.status(401).json({ message: "Unauthorized User." })
    }
    else {
        if (await checkTokenInBlackList(token)) {
            return res.status(401).json({ message: "Unauthorized User." })
        }
        else {
            jwt.verify(token, process.env.SECRET as string, (error: any, user: any) => {
                if (error) {
                    return res.status(403).send({ message: "User not authenticated" })
                }
                next()
            })
        }
    }
}
