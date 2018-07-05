import mongoose from "mongoose";
import {Response} from "express";
import {ObjectID} from "bson";


export class AddressRepository {

    private static _instance: AddressRepository = new AddressRepository();

    constructor() {
        if (!AddressRepository._instance) {
            AddressRepository._instance = this;
        }
    }

    public static getInstance(): AddressRepository {
        return this._instance;
    }
}

export const addressSchema = new mongoose.Schema({
    city: {type: String, required: true},
    country: {type: String, required: true},
    extraInfo: {type: String},
    stateProvince: {type: String, required: true},
    streetName: {type: String, required: true},
    streetNumber: {type: Number, required: true},
});

export const AddressSchema = mongoose.model("Address", addressSchema);
