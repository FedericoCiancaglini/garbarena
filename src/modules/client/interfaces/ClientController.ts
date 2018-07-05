import {Request, Response} from "express";
import {Client} from "./Client";

export interface ClientController {
    addClient(req: Request, res: Response): void
    getAllClients(req: Request, res: Response): void
    getClientByUsername(req: Request, res: Response): void
    removeClient(req: Request, res: Response): void
    updateClient(req: Request, res: Response): void
    checkout(req: Request, res: Response): void
}