import {Sellable} from "../interfaces/Sellable";
import {Category} from "../interfaces/Category";
import {Type} from "../interfaces/Type";

export class Product implements Sellable {
    category: Category;
    description: string;
    name: string;
    price: number;
    type: Type

    getCategory(): Category {
        return this.category;
    }

    getDescription(): string {
        return this.description;
    }

    getName(): string {
        return this.name;
    }

    getPrice(): number {
        return this.price;
    }

}