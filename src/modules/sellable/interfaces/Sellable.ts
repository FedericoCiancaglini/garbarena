import {Category as CategoryInterface} from "./Category";

export interface Sellable {
    name: string
    description: string
    price: number
    category: CategoryInterface

    getName(): string
    getDescription(): string
    getPrice(): number
    getCategory(): CategoryInterface
}