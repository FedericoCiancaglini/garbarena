import {Sellable} from "../interfaces/Sellable";
import {Category} from "../interfaces/Category";
import {Type} from "../interfaces/Type";

export class Product implements Sellable {
    category: Category;
    description: string;
    name: string;
    price: number;
    type: Type;

    constructor(product: Product) {
        this.category = product.category;
        this.description= product.description;
        this.name = product.name;
        this.price = product.price;
        this.type = product.type;
    }

    equals(product: Product): boolean {
        return this.name === product.name;
    }

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

    getType(): Type{
        return this.type;
    }

}