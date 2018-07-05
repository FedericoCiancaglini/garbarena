import mongoose from "mongoose";
import {Response} from "express";
import {ObjectID} from "bson";
import {addressSchema} from "./AddressRepository";
import {Person as PersonInterface} from "../interfaces/Person";

export class PersonRepository {

    private static _instance: PersonRepository = new PersonRepository();

    constructor() {
        if (!PersonRepository._instance) {
            PersonRepository._instance = this;
        }
    }

    public static getInstance(): PersonRepository {
        return this._instance;
    }

    public addPerson(person: PersonInterface, callback: (error: any, response: any) => Response|void, error?: (message: string) => Response ) {
        this.getPersonInstance(person).then(personDocument => personDocument.save(callback));

    }

    public getAllPeople(callback: (error: any, response: any) => Response) {
        return PersonSchema.find({}, callback);
    }

    public getPerson(userKey: String, callback: (error: any, personFound: any) => Response) {
        PersonSchema.find({userKey: userKey}, callback)
    }

    public updatePerson(person: PersonInterface, callback: (error: any, response:any) => Response,
                        notFoundCallback?: (message: string) => Response) {
        this.getPerson(person.getUserKey(), (errorFound, personFound) => {
            if (errorFound) return notFoundCallback("Error updating person");
            if (personFound) {
                personFound.update(person, callback)
            } else {
                notFoundCallback("Person not found")
            }
        })
    }

    private getPersonInstance(person: PersonInterface) : Promise<any> {
        return new Promise(((resolve, reject) => {
            resolve(new PersonSchema({
                address: person.getAddress(),
                name: person.getName(),
                lastName: person.getLastName(),
                userKey: person.getUserKey()
            }))
        }))
    }
}

export const personSchema = new mongoose.Schema({
    address: {type: addressSchema, required: true},
    name: {type: String, required: true},
    lastName: {type: String, required: true},
    userKey: {type: String, required: true},
});

export const PersonSchema = mongoose.model("Person", personSchema);
