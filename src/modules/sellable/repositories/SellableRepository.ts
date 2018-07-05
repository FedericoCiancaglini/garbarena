import mongoose from "mongoose";
import {Response} from "express";
import {categorySchema} from "./CategoryRepository";

export class SellableRepository{

}

export const sellableSchema = new mongoose.Schema({
    name: {type: String, required: true},
    description: {type: String},
    category: {type: categorySchema, required: true},
});

export const SellableSchema = mongoose.model("Sellable", sellableSchema);