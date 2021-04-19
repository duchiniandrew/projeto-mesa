import { Request, Response } from "express";
import validation from "./validation"
import changeUserEmailService from "../../Services/changeUserEmail"
import getIdFromToken from "../../Services/getIdFromToken"

export default async function changeUserEmail(req: Request, res: Response) {
    try {
        req.body.userId = getIdFromToken(req)
        await validation(req)
        try {
            res.status(200).json(await changeUserEmailService(req.body.userId, req.body.newEmail))
        }
        catch (error) {
            if (error.code === "23505") {
                res.status(400).json({ message: "Email allready in use." })
            }
            else {
                res.status(500).json({ message: "Internal error in server please contact the administrator" })
            }
        }
    }
    catch (error) {
        res.status(error.code).json({ message: error.message })
    }
}