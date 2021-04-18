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
    ///[^A-Za-z0-9]+/.test(password)
    //REGEx here doesn't work
    if (password.length < 8 || !testPassword(password)) {
        throw new FormatPasswordError()
    }
}
function testPassword(password: string) {
    let hasNumber = false
    let hasLetters = false

    //TODO find a better way to check password format
    for (let i = 0; i < password.length; i++) {
        if (/[a-zA-Z]/.test(password[i])) {
            hasLetters = true
        }
        if (/\d+/g.test(password[i])) {
            hasNumber = true
        }
        if (hasLetters && hasNumber) {
            return true
        }
    }
    return false
}