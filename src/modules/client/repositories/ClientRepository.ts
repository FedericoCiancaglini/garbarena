import mongoose from "mongoose";
import {Response} from "express";
import {Client as ClientInterface} from "../interfaces/Client";
import {addressSchema} from "../../person/repositories/AddressRepository";

export class ClientRepository {
    private static _instance: ClientRepository = new ClientRepository();

    constructor() {
        if (!ClientRepository._instance) {
            ClientRepository._instance = this;
        }
    }

    public static getInstance(): ClientRepository {
        return this._instance;
    }

    public addClient(client: ClientInterface, callback: (error: any, response: any) => Response|void, error?: (message: string) => Response) {
        this.getClientInstance(client).then(clientDocument => clientDocument.save(callback));
    }

    public getAllClients() {}

    public getClientByUsername() {}

    public removeClient() {}

    public updateClient() {}

    public checkout() {}

    private getClientInstance(client: ClientInterface) : Promise<any> {
        return new Promise(((resolve, reject) => {
            resolve(new ClientSchema({
                address: client.getAddress(),
                name: client.getName(),
                lastName: client.getLastName(),
                userKey: client.getUserKey(),
                username: client.getUsername()
            }))
        }))
    }
}

export const clientSchema = new mongoose.Schema({
    address: {type: addressSchema, required: true},
    name: {type: String, required: true},
    lastName: {type: String, required: true},
    userKey: {type: String, required: true},
    username: {type: String, required: true}
});

export const ClientSchema = mongoose.model("Client", clientSchema);