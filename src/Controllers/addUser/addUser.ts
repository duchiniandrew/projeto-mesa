import { Request, Response } from "express"

import teste2 from "../../Services/addUser"
import validation from "./validation"

export default async function addUser(req: Request, res: Response) {
    // try {
        try {
            await validation(req)
            try {
                res.status(200).json(await teste2(req.body.name, req.body.email, req.body.password))
            }
            catch (error) {
                res.status(500).json("Internal error in server please contact the administrator")
            }
        }
        catch (error) {
            res.status(error.code).json(error.message)
        }
    // }
    // catch (error) {
    //     res.status(403).send("User not Authenticated.")
    // }
}