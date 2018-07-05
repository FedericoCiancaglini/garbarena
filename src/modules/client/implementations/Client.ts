import {Client as ClientInterface} from "../interfaces/Client";
import {Person} from "../../person/implementations/Person";

export class Client extends Person implements ClientInterface {

    username: string;

    constructor(client: Client) {
        super(client);
        this.username = client.username;
    }

    getUsername(): string {
        return this.username;
    }

}