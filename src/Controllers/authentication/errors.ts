export class EmptyEmailError extends Error {
    code: number
    constructor() {
        super("Email parameter is empty.")
        this.code = 422
    }
}
export class EmptyPasswordError extends Error {
    code: number
    constructor() {
        super("Password parameter empty.")
        this.code = 422
    }
}
export class FailedAuthentication extends Error {
    code: number
    constructor() {
        super("Email or password invalid.")
        this.code = 401
    }
}