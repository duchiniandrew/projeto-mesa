import { Request, Response } from "express";

import getUserPerfilService from "../../Services/getUserPerfil"
import getIdFromToken from "../../Services/getIdFromToken"

export default async function getUserPerfil(req: Request, res: Response) {
    try {
        res.status(200).json(await getUserPerfilService(getIdFromToken(req)))
    }
    catch (error) {
        res.status(error.code).json({ message: error.message })
    }
}