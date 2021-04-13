import { Request, Response } from "express";
import validation from "./validation"
import changeUserEmailService from "../../Services/changeUserEmail"

export default async function changeUserEmail(req: Request, res: Response) {
    try {
        await validation(req)
        try {
            res.status(200).json(await changeUserEmailService(req.body.newPassword, req.body.userId))
        }
        catch (error) {
            res.status(error.code).json({ message: error.message })
        }
    }
    catch (error) {
        res.status(error.code).json({ message: error.message })
    }
}