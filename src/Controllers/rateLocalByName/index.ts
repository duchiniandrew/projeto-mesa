import { Request, Response } from "express";
import validation from "./validation"
import rateLocalByNameService from "../../Services/rateLocalByName"

export default async function rateLocalByName(req: Request, res: Response) {
    try {
        validation(req)
        try {
            res.status(201).json(await rateLocalByNameService(req.body.rate, req.body.comment, req.body.localName))
        }
        catch (error) {
            res.status(error.code).json({ message: error.message })
        }
    }
    catch (error) {
        res.status(error.code).json({ message: error.message })
    }
}