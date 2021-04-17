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
            if (error.code === '23505') {
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