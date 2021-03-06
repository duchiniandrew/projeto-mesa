import jwt from "jsonwebtoken"
import { Request } from "express"

export default function getIdFromToken(req: Request) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if (token) {
        const decoded: any = jwt.decode(token)
        return decoded.userId
    }
}