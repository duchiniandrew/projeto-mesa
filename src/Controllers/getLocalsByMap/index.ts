import { Request, Response } from "express"
import getLocals from "../../Services/getLocalsByMap"

export default async function getLocalsByMap(req: Request, res: Response) {
    res.status(200).json(await getLocals())
}