import { Request, Response } from "express"

import teste2 from "../Services/teste"

export default function teste(req: Request, res: Response) {
    try {
        res.status(200).send(teste2())
    }
    catch (error) {
        res.status(403)
    }
}