import {StorageLocation as StorageLocationInterface} from "../interfaces/StorageLocation";
import {Sellable as SellableInterface} from "../../sellable/interfaces/Sellable";
import {Address as AddressInterface} from "../../person/interfaces/Address";

export class StorageLocation implements StorageLocationInterface {

    address: AddressInterface;
    sellables: Map<SellableInterface, number>;

    constructor(storageLocation: StorageLocation) {
        this.address = storageLocation.address;
        this.sellables = storageLocation.sellables;
    }

    addSellable(sellable: SellableInterface, amount: number): void {
        this.sellables.set(sellable, amount)
    }

    getAddress(): AddressInterface {
        return this.address;
    }

    getSellables(): Map<SellableInterface, number> {
        return this.sellables;
    }

    removeSellable(sellable: SellableInterface): void {
        this.sellables.delete(sellable)
    }

}