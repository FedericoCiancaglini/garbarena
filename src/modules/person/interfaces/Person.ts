import {Address} from "./Address";

export interface Person {
    getAddress(): Address
    getName(): string
    getLastName(): string
    getUserKey(): string
}