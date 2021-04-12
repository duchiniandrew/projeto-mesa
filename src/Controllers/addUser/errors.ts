export class EmptyNameError extends Error {
    code: number
    constructor() {
        super("Name parameter empty.")
        this.code = 422
    }
}
export class EmptyEmailError extends Error {
    code: number
    constructor() {
        super("Email parameter empty.")
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
export class FormatPasswordError extends Error {
    code: number
    constructor() {
        super("Password must have at least 8 characters and include numbers and letters.")
        this.code = 400
    }
}
export class EmailInUseError extends Error {
    code: number
    constructor() {
        super("Email allready in use.")
        this.code = 400
    }
}