import { Request } from "express";
import { EmptyIdParameter, InvalidIdParameter } from "./errors"

export default function validation(req: Request) {
    if (req.params.id === "") {
        throw new EmptyIdParameter()
    }
    if (isNaN(parseInt(req.params.id))) {
        throw new InvalidIdParameter()
    }
}