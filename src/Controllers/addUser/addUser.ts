import { Request, Response } from "express"

import addUserService from "../../Services/addUser"
import validation from "./validation"

export default async function addUser(req: Request, res: Response) {
    try {
        await validation(req)
        try {
            res.status(201).json(await addUserService(req.body.name, req.body.email, req.body.password))
        }
        catch (error) {
            if (error.code === '23505') {
                res.status(400).json({ message: "Email allready in use." })
            }
            else {
                res.status(500).json({ message: "Internal error in server please contact the administrator" })
            }
        }
    }
    catch (error) {
        res.status(error.code).json({ message: error.message })
    }
}