import {Sellable as SellableInterface} from "../../sellable/interfaces/Sellable";
import {Client as ClientInterface} from "../../client/interfaces/Client";

export interface Sale {
    getDate(): Date
    getSellables(): SellableInterface[]
    getClient(): ClientInterface
}