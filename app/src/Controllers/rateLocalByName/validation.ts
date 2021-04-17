import { Request } from "express";
import { EmptyRateParameterError, EmptyCommentParameterError, EmptyLocalNameParameterError } from "./errors"

export default function validation(req: Request) {
    if (!req.body.rate) {
        throw new EmptyRateParameterError()
    }
    if (req.body.comment === "") {
        throw new EmptyCommentParameterError()
    }
    if (req.body.localName === "") {
        throw new EmptyLocalNameParameterError()
    }
}