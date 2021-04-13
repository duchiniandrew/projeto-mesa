import { Request, Response } from "express";

import validation from "./validation"
import getUserPerfilService from "../../Services/getUserPerfil"

export default async function getUserPerfil(req: Request, res: Response) {
    try {
        validation(req)
        try {
            res.status(200).json(await getUserPerfilService(parseInt(req.params.userId)))
        }
        catch (error) {
            res.status(error.code).json({ message: error.message })
        }
    }
    catch (error) {
        res.status(error.code).json({ message: error.message })
    }
}