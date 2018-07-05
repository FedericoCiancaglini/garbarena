import {Category} from "../interfaces/Category";

export class ParentCategory implements Category {

    name: String;

    constructor(category: Category) {
        this.name = category.getName();
    }

    getName(): string {
        return name;
    }

}