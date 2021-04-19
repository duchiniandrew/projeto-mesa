import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm"
import { Local } from "./Local"

@Entity()
export class LocalAnalysis {
    constructor(rate: number, comments: string, local: Local) {
        this.rate = rate
        this.comments = comments
        this.local = local
    }

    @PrimaryGeneratedColumn('increment')
    id?: number

    @Column('float')
    rate?: number

    @Column()
    comments?: string

    @ManyToOne(type => Local, local => local.comments)
    local: Local
}