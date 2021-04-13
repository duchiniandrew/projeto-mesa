import { Request } from "express";

import { EmptyIdError, FormatIdError } from "./errors"

export default function validation(req: Request) {
    if (req.params.userId === "") {
        throw new EmptyIdError()
    }
    if (isNaN(parseInt(req.params.userId))) {
        throw new FormatIdError()
    }
}