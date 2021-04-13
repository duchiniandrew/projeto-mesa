import { Entity, PrimaryColumn } from "typeorm"

@Entity()
export class TokenBlackList {
    constructor(token: string) {
        this.token = token
    }

    @PrimaryColumn()
    token: string
}