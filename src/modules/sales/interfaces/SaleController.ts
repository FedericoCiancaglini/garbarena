import {StorageLocation as StorageLocationInterface} from "../../stock/interfaces/StorageLocation";
import {Sellable as SellableInterface} from "../../sellable/interfaces/Sellable";
import {Client as ClientInterface} from "../../client/interfaces/Client";

export interface SaleController {
    startTransaction(creditCardNumber: string,
                     price: number,
                     sellable: SellableInterface,
                     storage: StorageLocationInterface,
                     client: ClientInterface,
                     onSuccess?: (response: any) => void,
                     onError?: (error: any) => void): void

    transactionSuccess(): boolean
    failedTransaction(): boolean
}