export class EmptyIdError extends Error {
    code: number
    constructor() {
        super("Id parameter empty.")
        this.code = 422
    }
}
export class FormatIdError extends Error {
    code: number
    constructor() {
        super("Id parameter must be a integer number.")
        this.code = 400
    }
}