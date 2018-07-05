import mongoose, {mongo} from "mongoose";
import {Response} from "express";
import {categorySchema} from "./CategoryRepository";
import {typeSchema} from "../implementations/Type";
import {Sellable as SellableInterface} from "../interfaces/Sellable";
import {Combo} from "../implementations/Combo";
import {Product} from "../implementations/Product";
import {PersonSchema} from "../../person/repositories/PersonRepository";

export class SellableRepository{

    private static _instance: SellableRepository = new SellableRepository();

    constructor() {
        if (!SellableRepository._instance) {
            SellableRepository._instance = this;
        }
    }

    public static getInstance(): SellableRepository {
        return this._instance;
    }

    public addSellable(sellable: SellableInterface, callback: (error: any, response: any) => Response|void, error?: (message: string) => Response) {
        this.getSellableInstance(sellable).then((sellableDocument) => {
            return sellableDocument.save(callback)
            }
        )
    }

    public getAllProducts(callback: (error: any, response: any) => Response) {
        return SellableSchema.find({}, callback);
    }

    public getSellableByName(name: String, callback: (error: any, sellableFound: any) => Response) {
        SellableSchema.find({name: name}, callback)
    }

    private getSellableInstance(sellable: SellableInterface): Promise<any> {
        return new Promise(((resolve, reject) => {
            if (sellable instanceof Combo) {
                sellable.setPrice();
                resolve(new SellableSchema({
                    name: sellable.getName(),
                    price: sellable.getPrice(),
                    description: sellable.getDescription(),
                    category: sellable.getCategory(),
                    type: sellable.getType(),
                    discountFactor: sellable.getDiscountFactor(),
                    products: sellable.getProducts(),
                }))
            } else if (sellable instanceof Product) {
                resolve(new SellableSchema({
                    name: sellable.getName(),
                    price: sellable.getPrice(),
                    description: sellable.getDescription(),
                    category: sellable.getCategory(),
                    type: sellable.getType()
                }))
            }
        }))
    }

    private buildCombo(auxSellable: Combo): Promise<any> {
        return new Promise<Combo>(((resolve, reject) => {
            auxSellable.getProducts().forEach(product => {
                auxSellable.addProduct(product);
            });
            resolve();
        }))
    }
}

export const sellableSchema = new mongoose.Schema({
    name: {type: String, required: true},
    price: {type: Number, required: true},
    description: {type: String},
    category: {type: categorySchema, required: true},
    type: {type: typeSchema},
    discountFactor: {type: Number, required: false},
    products: {type: [mongoose.Schema.Types.Mixed], required: () => sellableSchema.get('type') === 'Combo'}
});

export const SellableSchema = mongoose.model("Sellable", sellableSchema);