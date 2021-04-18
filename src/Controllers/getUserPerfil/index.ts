import { Request, Response } from "express";

import getUserPerfilService from "../../Services/getUserPerfil"
import getEmailFromToken from "../../Services/getEmailFromToken"

export default async function getUserPerfil(req: Request, res: Response) {
    try {
        res.status(200).json(await getUserPerfilService(getEmailFromToken(req)))
    }
    catch (error) {
        res.status(error.code).json({ message: error.message })
    }
}