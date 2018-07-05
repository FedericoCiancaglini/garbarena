export interface Address {
    getCity(): string
    getCountry(): string
    getExtraInformation(): string
    getStateProvince(): string
    getStreetName(): string
    getStreetNumber(): number
}