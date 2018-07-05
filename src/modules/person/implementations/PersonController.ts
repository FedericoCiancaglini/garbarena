import { Request, Response } from "express";
import {PersonController as PersonControllerInterface} from "../interfaces/PersonController";
import {PersonRepository} from "../repositories/PersonRepository";
import {Person} from "./Person";
import {Person as PersonInterface} from "../interfaces/Person";

export class PersonController implements PersonControllerInterface {

    private repository: PersonRepository;

    constructor() {
        this.repository = PersonRepository.getInstance();
    }

    addPerson = (req: Request, res: Response) => {
        const person: PersonInterface = this.buildPersonFromBody(req, res);
        this.repository.addPerson(person, (err, response) => {
            if (err) {
                return res.status(500).send({
                    status: 500,
                    error: err.message
                })
            }
            return res.send({
                status: 200,
                createdPerson: response
            });
        }, (errorMessage) => res.status(400))
    };

    getAllPeople = (req: Request, res: Response) => {
        this.repository.getAllPeople((error: any, response: any) => {
            if (response) {
                return res.send({
                    status: 200,
                    products: response
                })
            } else {
                return res.status(500).send({
                    status: 500,
                    error: "Error obtaining all people"
                })
            }
        })
    };

    getPerson = (req: Request, res: Response) => {
        this.repository.getPerson(req.params.userKey, (error, person) => {
            if (error) {
                return res.status(500).send({
                    status: 500,
                    error: error.message
                })
            } else if (!person) {
                return res.status(404).send({
                    status: 404,
                    error: "Person with given userKey does not exist"
                })
            } else {
                return res.send({
                    status: 200,
                    person: person
                });
            }
        })
    };

    removePerson = (req: Request, res: Response) => {
    };

    updatePerson = (req: Request, res: Response) => {
        const personToUpdate: PersonInterface = this.buildPersonFromBody(req, res);
        this.repository.updatePerson(personToUpdate,
            (error: any, response: any) => {
                if (error) {
                    return res.status(500).send({
                        status: 500,
                        error: error
                    })
                }
                if (response.ok) {
                    res.send({
                        status: 200,
                        person: personToUpdate
                    })
                }
            }, (errorMessage) => {
                return res.status(500).send({
                    status: 500,
                    error: errorMessage
                })
            })
    };

    private buildPersonFromBody(req: Request, res: Response): PersonInterface {
        return new Person(req.body);
    }
}