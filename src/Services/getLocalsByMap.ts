import { Container } from "typedi"
import { Repository } from "typeorm"

import { Local } from "../DB/Entities/Local"

export default async function getLocals(latUser: number, lngUser: number) {
    const locals = await Container.get<Repository<Local>>("LocalTable").find()
    const localsWithDistance = []

    for (const local of locals) {
        const distance = calculateDistance(latUser, lngUser, local.lat, local.lng)
        localsWithDistance.push({
            ...local,
            distance
        })
    }

    localsWithDistance.sort((a, b) => {
        if (a.distance > b.distance) {
            return 1
        }
        else if (a.distance < b.distance) {
            return -1
        }
        else {
            return 0
        }
    })
    return localsWithDistance

    function calculateDistance(lat1: number, lng1: number, lat2: number, lng2: number) {
        const earthRad = 6371000
        const lat1InRad = lat1 * Math.PI / 180
        const lat2InRad = lat2 * Math.PI / 180
        const latDiff = (lat2 - lat1) * Math.PI / 180
        const lngDiff = (lng2 - lng1) * Math.PI / 180

        const a = Math.sin(latDiff / 2) * Math.sin(latDiff / 2) + Math.cos(lat1InRad) * Math.cos(lat2InRad) * Math.sin(lngDiff / 2) * Math.sin(lngDiff / 2)
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
        return ((earthRad * c) / 1000).toFixed(3)
    }
}