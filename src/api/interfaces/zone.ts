import { IState } from "./state"

export interface IZone {
    _id: string
    choords: IChoords
    createdAt?: Date
    description: string
    images?: string[]
    location: string
    mainImageUrl?: string
    name: string
    schedules: string
    state: IState
    updatedAt?: Date
}

interface IChoords {
    latitude: number
    longitude: number
}