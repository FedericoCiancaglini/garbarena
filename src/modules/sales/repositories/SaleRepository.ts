import mongoose from "mongoose";
import {Response} from "express";
import {clientSchema} from "../../client/repositories/ClientRepository";
import {sellableSchema} from "../../sellable/repositories/SellableRepository";
import {Sale as SaleInterface} from "../interfaces/Sale";

export class SaleRepository {

    private static _instance: SaleRepository = new SaleRepository();

    constructor() {
        if (!SaleRepository._instance) {
            SaleRepository._instance = this;
        }
    }

    public static getInstance(): SaleRepository {
        return this._instance;
    }

    public addSale(sale: SaleInterface) {
        this.getSaleInstance(sale).then(saleDocument => saleDocument.save());
    }

    private getSaleInstance(sale: SaleInterface): Promise<any> {
        return new Promise((((resolve, reject) => {
            resolve(new SaleSchema({
                date: sale.getDate(),
                sellable: sale.getSellable(),
                client: sale.getClient()
            }))
        })))

    }
}

export const saleSchema = new mongoose.Schema({
    date: {type: Date, required: true},
    sellable: {type: sellableSchema, required: true},
    client: {type: clientSchema, required: true}
});

export const SaleSchema = mongoose.model("Sale", saleSchema);