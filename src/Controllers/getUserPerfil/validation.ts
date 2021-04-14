import { Request } from "express";

import { EmptyIdError, FormatIdError } from "./errors"

export default function validation(req: Request) {
    if (req.params.id === "") {
        throw new EmptyIdError()
    }
    if (isNaN(parseInt(req.params.id))) {
        throw new FormatIdError()
    }
}