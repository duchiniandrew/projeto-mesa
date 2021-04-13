import jwt, { Secret } from "jsonwebtoken"
import signInUserByEmailAndPassword from "../Services/signInUserByEmailAndPassword"
import { FailedAuthentication } from "../Controllers/authentication/errors"

export default async function auth(email: string, password: string) {
    if (await signInUserByEmailAndPassword(email, password)) {
        return jwt.sign(email, process.env.SECRET as Secret)
    }
    else {
        throw new FailedAuthentication()
    }
}