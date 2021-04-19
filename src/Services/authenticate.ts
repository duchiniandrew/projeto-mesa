import jwt, { Secret } from "jsonwebtoken"
import { Request } from "express"
import signInUserByEmailAndPassword from "../Services/signInUserByEmailAndPassword"
import { FailedAuthentication } from "../Controllers/authentication/errors"

export default async function auth(req: Request) {
    const { email, password } = req.body
    const expirationTime = {
        expiresIn: '1h'
    }
    const user = await signInUserByEmailAndPassword(email, password)
    if (user) {
        return { token: jwt.sign({ userId: user.id }, process.env.SECRET as Secret, expirationTime) };
    }
    else {
        throw new FailedAuthentication()
    }
}