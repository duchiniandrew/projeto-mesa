import jwt, { Secret } from "jsonwebtoken"
import { Request } from "express"
import signInUserByEmailAndPassword from "../Services/signInUserByEmailAndPassword"
import { FailedAuthentication } from "../Controllers/authentication/errors"

export default async function auth(req: Request) {
    const { email, password } = req.body
    const expirationTime = {
        expiresIn: '1h'
    }
    if (await signInUserByEmailAndPassword(email, password)) {
        return { token: jwt.sign({ email: email }, process.env.SECRET as Secret, expirationTime) };
    }
    else {
        throw new FailedAuthentication()
    }
}