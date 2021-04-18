import { Request, Response } from "express";

import validation from "./validation"
import getUserPerfilService from "../../Services/getUserPerfil"
import getEmailFromToken from "../../Services/getEmailFromToken"

export default async function getUserPerfil(req: Request, res: Response) {
    try {
        validation(req)
        try {
            res.status(200).json(await getUserPerfilService(getEmailFromToken(req)))
        }
        catch (error) {
            res.status(error.code).json({ message: error.message })
        }
    }
    catch (error) {
        res.status(error.code).json({ message: error.message })
    }
}