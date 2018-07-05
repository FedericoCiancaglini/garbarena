import mongoose from "mongoose";
import {Response} from "express";
import {StorageLocation as StorageLocationInterface} from "../interfaces/StorageLocation";
import {addressSchema} from "../../person/repositories/AddressRepository";
import {sellableSchema} from "../../sellable/repositories/SellableRepository";

export class StorageRepository {

    private static _instance: StorageRepository = new StorageRepository();

    constructor() {
        if (!StorageRepository._instance) {
            StorageRepository._instance = this;
        }
    }

    public static getInstance(): StorageRepository {
        return this._instance;
    }

    public addStorage(storage: StorageLocationInterface, callback: (error: any, response: any) => Response|void, error?: (message: string) => Response) {
        this.getStorageInstance(storage).then(storageDocument => storageDocument.save(callback));
    }

    private getStorageInstance(storage: StorageLocationInterface): Promise<any> {
        return new Promise((((resolve, reject) => {
            resolve(new StorageSchema({
                address: storage.getAddress(),
                sellables: storage.getSellables()
            }))
        })))
    }
}

export const storageSchema = new mongoose.Schema({
    address: {type: addressSchema, required: true},
    sellables: {type: mongoose.Schema.Types.Mixed, required: true}
});

export const StorageSchema = mongoose.model("Storage", storageSchema);