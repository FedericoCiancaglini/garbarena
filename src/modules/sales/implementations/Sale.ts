import {Sale as SaleInterface} from "../interfaces/Sale";
import {Client as ClientInterface} from "../../client/interfaces/Client";
import {Sellable as SellableInterface} from "../../sellable/interfaces/Sellable";

export class Sale implements SaleInterface {

    date: Date;
    sellable: SellableInterface;
    client: ClientInterface;

    constructor(sale: any) {
        this.date = sale.date;
        this.sellable = sale.sellable;
        this.client = sale.client;
    }

    getClient(): ClientInterface {
        return this.client;
    }

    getDate(): Date {
        return this.date;
    }

    getSellable(): SellableInterface {
        return this.sellable;
    }

}