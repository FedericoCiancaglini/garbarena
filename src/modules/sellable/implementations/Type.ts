import mongoose from "mongoose"
import {Type as TypeInterface} from "../interfaces/Type";

export class Type implements TypeInterface {
    value: string;

    getValue(): string {
        return this.value;
    }

}

export const typeSchema = new mongoose.Schema({
    value: String
});

export const TypeSchema = mongoose.model('Type', typeSchema);