import {Sellable} from "../interfaces/Sellable";
import {Category as CategoryInterface} from "../interfaces/Category";
import {Product} from "./Product";
import {Type as TypeInterface} from "../interfaces/Type";
import {Type} from "./Type";

export class Combo implements Sellable {
    category: CategoryInterface;
    description: string;
    name: string;
    price: number;
    discountFactor: number;
    products: Product[];
    type: TypeInterface;

    constructor(combo: Combo) {
        this.category = combo.category;
        this.description= combo.description;
        this.name = combo.name;
        this.price = combo.price;
        this.discountFactor = combo.discountFactor;
        this.products = combo.products;
        this.type = new Type({value: 'Combo'});
    }

    addProduct(product: Product): Product[] {
        this.products.push(product);
        return this.products;
    }

    removeProduct(product: Product): Product[] {
        this.products = this.products.filter(product => !product.equals(product));
        return this.products;
    }

    setPrice(): number {
        this.price = 0;
        this.products.forEach(product => {
            this.price += product.price;
        });
        this.price = this.price * this.discountFactor;
        return this.price;
    }

    getCategory(): CategoryInterface {
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

    getDiscountFactor(): number {
        return this.discountFactor;
    }

    getProducts(): Product[] {
        return this.products;
    }

    getType(): TypeInterface {
        return this.type;
    }

}