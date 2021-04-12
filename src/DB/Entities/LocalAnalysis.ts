import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm"
import { Local } from "./Local"

@Entity()
export class LocalAnalysis {
    constructor(rating: number, comments: string, local: Local) {
        this.rating = rating
        this.comments = comments
        this.local = local
    }

    @PrimaryGeneratedColumn('increment')
    id?: number

    @Column('float')
    rating?: number

    @Column()
    comments?: string

    @ManyToOne(type => Local, local => local.comments)
    local: Local
}