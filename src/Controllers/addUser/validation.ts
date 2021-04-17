import { Request } from "express"
import { Container } from "typedi"
import { Repository } from "typeorm"

import { User } from "../../DB/Entities/User"
import { EmptyEmailError, EmptyNameError, EmptyPasswordError, FormatPasswordError } from "./errors"

export default async function validation(req: Request) {

    const { name, email, password } = req.body

    if (name === "") {
        throw new EmptyNameError()
    }
    if (email === "") {
        throw new EmptyEmailError()
    }
    if (password === "") {
        throw new EmptyPasswordError()
    }
    if (password.length < 8 && /^[0-9a-zA-Z]+$/.test(password)) {
        throw new FormatPasswordError()
    }
}