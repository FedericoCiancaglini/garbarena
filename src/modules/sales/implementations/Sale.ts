import {Sale as SaleInterface} from "../interfaces/Sale";
import {Client as ClientInterface} from "../../client/interfaces/Client";
import {Sellable as SellableInterface} from "../../sellable/interfaces/Sellable";

export class Sale implements SaleInterface {

    date: Date;
    sellables: SellableInterface[];
    client: ClientInterface;

    constructor(sale: Sale) {
        this.date = sale.date;
        this.sellables = sale.sellables;
        this.client = sale.client;
    }

    getClient(): ClientInterface {
        return this.client;
    }

    getDate(): Date {
        return this.date;
    }

    getSellables(): SellableInterface[] {
        return this.sellables;
    }

}