export class EmptyIdParameter extends Error {
    code: number
    constructor() {
        super('Parameter "id" is empty.')
        this.code = 422
    }
}
export class InvalidIdParameter extends Error {
    code: number
    constructor() {
        super('Invalid "id" parameter.')
        this.code = 400
    }
}