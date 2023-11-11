import { connectToDb } from "../database/db"
import { IState } from "../interfaces/state";
import States from "../schemas/state"
import Zones from "../schemas/zone"

export default class StateModel {
    static async getAll() {
        await connectToDb()
        return await States.find().populate({ path: 'zones', model: Zones })
    }
    static async getbyId(id: string) {
        await connectToDb()
        return await States.findById(id).populate({ path: 'zones', model: Zones })

    }
    static async create(state: IState) {
        await connectToDb();
        const response = await new States(state);
        return await response.save()
    }
    static async createMany(states: IState[]) {
        await connectToDb();
        const response = await States.insertMany(states);
        return response
    }
    static async update(id: string, body: IState) {
        await connectToDb();
        const response = await States.findByIdAndUpdate(id, body);
        return response
    }
    static async delete(id: string) {
        await connectToDb();
        return await States.findByIdAndDelete({ _id: id });
    }
}