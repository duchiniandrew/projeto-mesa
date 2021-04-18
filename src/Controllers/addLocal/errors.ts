export class EmptyNameError extends Error {
    code: number
    constructor() {
        super("Name parameter empty.")
        this.code = 422
    }
}
export class EmptyDescriptionError extends Error {
    code: number
    constructor() {
        super("Description parameter empty.")
        this.code = 422
    }
}
export class EmptyLatError extends Error {
    code: number
    constructor() {
        super("Lat parameter empty.")
        this.code = 422
    }
}
export class EmptyLngError extends Error {
    code: number
    constructor() {
        super("Lng parameter empty.")
        this.code = 422
    }
}