import { Request, Response } from "express";

import logoutService from "../../Services/logout"

export default async function logout(req: Request, res: Response) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if (token) {
        await logoutService(token)
        res.status(200).json({ message: "Logout successfully" })
    }
}