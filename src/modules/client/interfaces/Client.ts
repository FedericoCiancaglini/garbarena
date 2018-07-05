import {Person} from "../../person/interfaces/Person";
import {Sale} from "../../sales/interfaces/Sale";

export interface Client extends Person{
    getUsername(): string
}