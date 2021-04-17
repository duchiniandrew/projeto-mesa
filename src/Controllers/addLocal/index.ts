import { Request, Response } from "express"

import validation from "./validation"
import addLocalService from "../../Services/addLocal"

export default async function addLocal(req: Request, res: Response) {
    try {
        validation(req)
        try {
            res.status(201).json(await addLocalService(req))
        }
        catch (error) {
            res.status(error.code).json({ message: error.message })
        }
    }
    catch (error) {
        res.status(error.code).json({ message: error.message })
    }
}