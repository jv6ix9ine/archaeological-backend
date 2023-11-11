import { connectToDb } from "../database/db";
import { IZone } from "../interfaces/zone";
import Zones from "../schemas/zone"
import States from "../schemas/state"

export default class ZoneModel {
    static async getAll() {
        await connectToDb()
        return await Zones.find().populate({ path: 'state', model: States })
    }
    static async getbyId(id: string) {
        await connectToDb()
        return await Zones.findById(id).populate({ path: 'state', model: States })

    }
    static async create(zone: IZone) {
        await connectToDb();
        const response = await new Zones(zone);
        return await response.save()
    }
    static async createMany(zones: IZone[]) {
        await connectToDb();
        const response = await Zones.insertMany(zones);
        return response
    }
    static async update(id: string, body: IZone) {
        await connectToDb();
        const response = await Zones.findByIdAndUpdate(id, body);
        return response
    }
    static async delete(id: string) {
        await connectToDb();
        return await Zones.findByIdAndDelete({ _id: id });
    }
}