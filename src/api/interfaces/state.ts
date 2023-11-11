import { IZone } from "./zone"

export interface IState {
    _id?: string
    createdAt?: Date
    name: string
    updatedAt?: Date
    zones?: IZone[]
}