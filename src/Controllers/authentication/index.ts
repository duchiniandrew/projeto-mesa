import { Request, Response } from "express"

import validation from "./validation"
import authService from "../../Services/authenticate"

export default async function authentication(req: Request, res: Response) {
    try {
        validation(req)

        try {
            res.status(200).json(await authService(req.body.email, req.body.password))
        }
        catch (error) {
            res.status(error.code || 500).json({ message: error.message })
        }
    }
    catch (error) {
        res.status(error.code).send({ message: error.message })
    }
}