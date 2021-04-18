import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class User {

    constructor(name: string, email: string, password: string) {
        this.name = name
        this.email = email
        this.password = password
    }

    @PrimaryGeneratedColumn('increment')
    id?: number

    @Column()
    name: string

    @Column({ unique: true })
    email: string

    @Column()
    password: string
}