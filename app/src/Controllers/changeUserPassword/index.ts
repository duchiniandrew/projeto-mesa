import { Request, Response } from "express";

import validation from "./validation"
import changeUserPasswordService from "../../Services/changeUserPassword"

export default async function changeUserPassword(req: Request, res: Response) {
    try {
        await validation(req)
        try {
            res.status(200).json(await changeUserPasswordService(req.body.newPassword, req.body.userId))
        }
        catch (error) {
            res.status(error.code).json({ message: error.message })
        }
    }
    catch (error) {
        res.status(error.code).json({ message: error.message })
    }
}