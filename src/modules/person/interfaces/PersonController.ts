import {Request, Response} from "express";

export interface PersonController {
    addPerson(req: Request, res: Response): void
    getAllPeople(req: Request, res: Response): void
    getPerson(req: Request, res: Response): void
    removePerson(req: Request, res: Response): void
    updatePerson(req: Request, res: Response): void
}