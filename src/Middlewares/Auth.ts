import { Request, Response, NextFunction } from "express"
import jwt from "jsonwebtoken"

export default function authenticateToken(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]

    if (!token) {
        return res.status(401).json("Unauthorized User.")
    }
    else {
        jwt.verify(token, process.env.SECRET as string, (error: any, user: any) => {
            if (error) {
                return res.status(403).send("User not authenticated")
            }
            next()
        })
    }

}
