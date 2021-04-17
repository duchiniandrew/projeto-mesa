import { Request, Response } from "express";

import rateLocalService from "../../Services/rateLocalById"
import validation from "./validation"

export default async function rateLocalById(req: Request, res: Response) {
    try {
        validation(req)
        try {
            res.status(201).json(await rateLocalService(req.body.rate, req.body.comment, req.body.localId))
        }
        catch (error) {
            res.status(error.code).json({ message: error.message })
        }
    }
    catch (error) {
        res.status(error.code).json({ message: error.message })
    }
}