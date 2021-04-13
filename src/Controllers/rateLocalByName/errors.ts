export class EmptyRateParameterError extends Error {
    code: number
    constructor() {
        super('Parameter "rate" is empty.')
        this.code = 422
    }
}
export class EmptyCommentParameterError extends Error {
    code: number
    constructor() {
        super('Parameter "comment" is empty.')
        this.code = 422
    }
}
export class EmptyLocalNameParameterError extends Error {
    code: number
    constructor() {
        super('Parameter "localName" is empty.')
        this.code = 422
    }
}
export class LocalNotFoundError extends Error {
    code: number
    constructor() {
        super('Local not found.')
        this.code = 400
    }
}