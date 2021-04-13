import { Request, Response } from "express";

import getLocalRateService from "../../Services/getLocalRates"
import validation from "./validation"

export default async function getLocalRate(req: Request, res: Response) {
    try {
        validation(req)
        try {
            res.status(200).json(await getLocalRateService(parseInt(req.params.localId)))
        }
        catch (error) {
            res.status(error.code).json({ message: error.message })
        }
    }
    catch (error) {
        res.status(error.code).json({ message: error.message })
    }
}