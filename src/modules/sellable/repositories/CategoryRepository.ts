import mongoose from "mongoose";
import {Response} from "express";

export class CategoryRepository {

}

export const categorySchema = new mongoose.Schema({
    name: {type: String, required: true}
});

export const CategorySchema = mongoose.model("Category", categorySchema);