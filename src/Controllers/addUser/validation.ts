import { Request } from "express"
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
    if (password.length < 8 && /[^A-Za-z0-9]+/.test(password)) {
        throw new FormatPasswordError()
    }
}