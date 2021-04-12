import { Request, Response } from "express"

import validation from "./validation"
import auth from "../../Services/authenticate"

export default function authentication(req: Request, res: Response) {
    try {
        validation(req)

        try {
            res.status(200).json(auth(req.body.email, req.body.password))
        }
        catch (error) {
            res.status(error.code || 500).json(error.message)
        }
    }
    catch (error) {
        res.status(error.code).send(error.message)
    }
}