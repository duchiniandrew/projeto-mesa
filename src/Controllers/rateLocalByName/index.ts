import { Request, Response } from "express";
import validation from "./validation"

export default function rateLocalByName(req: Request, res: Response) {
    try {
        validation(req)
    }
    catch (error) {
        res.status(error.code).json({ message: error.message })
    }
}