import express from "express";
import ZoneModel from "../models/zones";
import { IZone } from "../interfaces/zone";

export default class ZoneController {
    static async getAll(request: express.Request, response: express.Response) {
        const zones = await ZoneModel.getAll()
        return response.status(200).send(zones)
    }
    static async getById(request: express.Request, response: express.Response) {
        const zoneId = request.params.zoneId
        if (zoneId === undefined)
            return response.status(418).send("No valid identifier provided");
        const _response = await ZoneModel.getbyId(zoneId)
        return response.status(200).send(_response)
    }
    static async create(request: express.Request, response: express.Response) {
        const payload: IZone = await request.body;
        const newZone: IZone = {
            ...payload
        }
        const _response = await ZoneModel.create(newZone)
        return response.status(201).send(_response)
    }
    static async createMany(request: express.Request, response: express.Response) {
        const payload: IZone[] = await request.body;
        const _response = await ZoneModel.createMany(payload)
        return response.status(201).send(_response)
    }
    static async update(request: express.Request, response: express.Response) {
        const payload = request.body
        const zoneId = request.params.zoneId
        if (zoneId === undefined)
            return response.status(418).send("No valid identifier provided");
        const _response = await ZoneModel.update(zoneId, payload)
        return response.status(200).send(_response)
    }
    static async delete(request: express.Request, response: express.Response) {
        const zoneId = request.params.zoneId
        if (zoneId === undefined)
            return response.status(418).send("No valid identifier provided");
        const _response = await ZoneModel.delete(zoneId)
        return response.status(200).send(_response)
    }
}