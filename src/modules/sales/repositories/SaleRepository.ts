import mongoose from "mongoose";
import {Response} from "express";
import {clientSchema} from "../../client/repositories/ClientRepository";
import {sellableSchema} from "../../sellable/repositories/SellableRepository";

export class SaleRepository {

}

export const saleSchema = new mongoose.Schema({
    date: {type: Date, required: true},
    sellables: {type: [sellableSchema], required: true},
    client: {type: clientSchema, required: true}
});

export const SaleSchema = mongoose.model("Sale", saleSchema);