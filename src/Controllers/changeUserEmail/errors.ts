export class EmptyEmailError extends Error {
    code: number
    constructor() {
        super("Email parameter is empty.")
        this.code = 422
    }
}
export class FormatEmailError extends Error {
    code: number
    constructor() {
        super("Email must follow pattern like: email@email.com.")
        this.code = 400
    }
}
export class SameEmailError extends Error {
    code: number
    constructor() {
        super("Email cannot be the same.")
        this.code = 400
    }
}