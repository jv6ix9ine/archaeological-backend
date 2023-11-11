import express from "express"
import { IState } from "../interfaces/state";
import StateModel from "../models/state";

export default class StateController {
    static async getAll(request: express.Request, response: express.Response){
        const states = await StateModel.getAll()
        return response.status(200).send(states)
    }
    static async getById(request: express.Request, response: express.Response) {
        const stateId = request.params.stateId
        if (stateId === undefined)
            return response.status(418).send("No valid identifier provided");
        const _response = await StateModel.getbyId(stateId)
        return response.status(200).send(_response)
    }
    static async create(request: express.Request, response: express.Response) {
        const payload: IState = await request.body;
        const newState: IState = {
            ...payload
        }
        const _response = await StateModel.create(newState)
        return response.status(201).send(_response)
    }
    static async createMany(request: express.Request, response: express.Response) {
        const payload: IState[] = await request.body;
        const _response = await StateModel.createMany(payload)
        return response.status(201).send(_response)
    }
    static async update(request: express.Request, response: express.Response) {
        const payload = request.body
        const stateId = request.params.stateId
        if (stateId === undefined)
            return response.status(418).send("No valid identifier provided");
        const _response = await StateModel.update(stateId, payload)
        return response.status(200).send(_response)
    }
    static async delete(request: express.Request, response: express.Response) {
        const stateId = request.params.stateId
        if (stateId === undefined)
            return response.status(418).send("No valid identifier provided");
        const _response = await StateModel.delete(stateId)
        return response.status(200).send(_response)
    }
}