import {Person as PersonInterface} from "../interfaces/Person";
import {Address} from "../interfaces/Address";

export class Person implements PersonInterface {

    address: Address;
    name: string;
    lastName: string;
    userKey: string;

    constructor(person: Person) {
        this.address = person.address;
        this.name= person.name;
        this.lastName = person.lastName;
        this.userKey = person.userKey;
    }

    getAddress(): Address {
        return this.address;
    }

    getName(): string {
        return this.name;
    }

    getLastName(): string {
        return this.lastName;
    }

    getUserKey(): string {
        return this.userKey;
    }

}