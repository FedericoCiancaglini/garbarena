import {SaleController as SaleControllerInterface} from "../interfaces/SaleController";
import {Sellable as SellableInterface} from "../../sellable/interfaces/Sellable";
import {StorageLocation as StorageLocationInterface} from "../../stock/interfaces/StorageLocation";
import {Client as ClientInterface} from "../../client/interfaces/Client";
import {SaleRepository} from "../repositories/SaleRepository";
import {Sale} from "./Sale";

export class SaleController implements SaleControllerInterface {

    private repository: SaleRepository;

    constructor() {
        this.repository = SaleRepository.getInstance();
    }

    startTransaction(creditCardNumber: string, price: number, sellable: SellableInterface, storage: StorageLocationInterface, client: ClientInterface, onSuccess?: (response: any) => void, onError?: (error: any) => void): void {
        if (creditCardNumber.length === 16) {
            this.repository.addSale(new Sale({date: new Date(), sellables: sellable, client: client}))
        }
    }

    transactionSuccess(): boolean {
        return false;
    }
    
    failedTransaction(): boolean {
        return false;
    }
    
}