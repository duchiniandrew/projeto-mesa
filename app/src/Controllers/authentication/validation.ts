import { Request } from "express";

import { EmptyEmailError, EmptyPasswordError } from "./errors"

export default function validation(req: Request) {

    const { email, password } = req.body

    if (email === "") {
        throw new EmptyEmailError()
    }
    if (password === "") {
        throw new EmptyPasswordError()
    }
}