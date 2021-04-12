import { LocalAnalysisType } from "./LocalAnalysis"

export interface LocalType {
    id?: number
    name: string
    description: string
    lat: number
    lng: number
    comments?: LocalAnalysisType[]
}