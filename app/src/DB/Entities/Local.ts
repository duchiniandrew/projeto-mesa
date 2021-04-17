import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm"
import { LocalAnalysis } from "./LocalAnalysis"

@Entity()
export class Local {
    constructor(name: string, description: string, lat: number, lng: number) {
        this.name = name
        this.description = description
        this.lat = lat
        this.lng = lng
    }

    @PrimaryGeneratedColumn('increment')
    id?: number

    @Column()
    name: string

    @Column()
    description: string

    @Column('float')
    lat: number

    @Column('float')
    lng: number

    @OneToMany(type => LocalAnalysis, localAnalysis => localAnalysis.local)
    comments?: LocalAnalysis[]
}