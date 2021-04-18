import { Request, Response } from "express";

import validation from "./validation"
import changeUserPasswordService from "../../Services/changeUserPassword"
import getEmailFromToken from "../../Services/getEmailFromToken"

export default async function changeUserPassword(req: Request, res: Response) {
    try {
        req.body.email = getEmailFromToken(req)
        await validation(req)
        try {
            res.status(200).json(await changeUserPasswordService(req.body.newPassword, req.body.email))
        }
        catch (error) {
            res.status(error.code).json({ message: error.message })
        }
    }
    catch (error) {
        res.status(error.code).json({ message: error.message })
    }
}