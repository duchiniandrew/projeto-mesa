import { Request, Response } from "express"
import getLocals from "../../Services/getLocalsByList"

export default async function getLocalsByList(req: Request, res: Response) {
    res.status(200).json(await getLocals())
}