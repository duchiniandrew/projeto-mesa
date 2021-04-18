import { Request } from "express"
import { EmptyEmailError, EmptyNameError, EmptyPasswordError, FormatPasswordError } from "./errors"
import testPassword from "../../Utils/validatePassword"

export default function validation(req: Request) {

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
    ///[^A-Za-z0-9]+/.test(password)
    //REGEx here doesn't work
    if (password.length < 8 || !testPassword(password)) {
        throw new FormatPasswordError()
    }
}