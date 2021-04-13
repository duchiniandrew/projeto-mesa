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