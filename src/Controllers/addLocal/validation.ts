import { Request } from "express";
import { EmptyNameError, EmptyDescriptionError, EmptyLatError, EmptyLngError } from "./errors"

export default function validation(req: Request) {
    if (req.body.name === "") {
        throw new EmptyNameError()
    }
    if (req.body.description === "") {
        throw new EmptyDescriptionError()
    }
    if (!req.body.lat) {
        throw new EmptyLatError()
    }
    if (!req.body.lng) {
        throw new EmptyLngError()
    }
}