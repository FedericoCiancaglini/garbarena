import {Address as AddressInterface} from "../../person/interfaces/Address";
import {Sellable as SellableInterface} from "../../sellable/interfaces/Sellable";

export interface StorageLocation {
    getAddress(): AddressInterface
    getSellables(): Map<SellableInterface, number>
    addSellable(sellable: SellableInterface, amount: number): void
    removeSellable(sellable: SellableInterface): void
}