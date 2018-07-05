import {Address as AddressInterface} from "../interfaces/Address";

export class Address implements AddressInterface {

    city: string;
    country: string;
    extraInformation: string;
    stateProvince: string;
    streetName: string;
    streetNumber: number;

    getCity(): string {
        return this.city;
    }

    getCountry(): string {
        return this.country;
    }

    getExtraInformation(): string {
        return this.extraInformation;
    }

    getStateProvince(): string {
        return this.stateProvince;
    }

    getStreetName(): string {
        return this.streetName;
    }

    getStreetNumber(): number {
        return this.streetNumber;
    }

}