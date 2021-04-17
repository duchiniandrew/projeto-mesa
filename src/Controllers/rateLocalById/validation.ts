import { Request } from "express";

import { EmptyRateParameterError, EmptyCommentParameterError, EmptyIdParameterError } from "./errors"

export default function validation(req: Request) {
    if (!req.body.rating) {
        throw new EmptyRateParameterError()
    }
    if (req.body.comment === "") {
        throw new EmptyCommentParameterError()
    }
    if (!req.body.localId) {
        throw new EmptyIdParameterError()
    }
}