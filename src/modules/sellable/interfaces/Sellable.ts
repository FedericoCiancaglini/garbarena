import {Category as CategoryInterface} from "./Category";
import {Type as TypeInterface} from "./Type";

export interface Sellable {
    name: string
    description: string
    price: number
    category: CategoryInterface
    type: TypeInterface

    getName(): string
    getDescription(): string
    getPrice(): number
    getCategory(): CategoryInterface
}