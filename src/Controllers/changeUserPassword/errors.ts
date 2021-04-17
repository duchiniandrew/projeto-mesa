export class EmptyPasswordError extends Error {
    code: number
    constructor() {
        super("Password parameter empty.")
        this.code = 422
    }
}
export class FormatPasswordError extends Error {
    code: number
    constructor() {
        super("Password must have at least 8 characters and include numbers and letters.")
        this.code = 400
    }
}
export class SamePasswordError extends Error {
    code: number
    constructor() {
        super("Password cannot be the same.")
        this.code = 400
    }
}