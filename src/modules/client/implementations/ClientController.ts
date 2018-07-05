import {Request, Response} from "express";
import {ClientController as ClientControllerInterface} from "../interfaces/ClientController";
import {ClientRepository} from "../repositories/ClientRepository";
import {Client as ClientInterface} from "../interfaces/Client";

export class ClientController implements ClientControllerInterface {

    private repository: ClientRepository;

    constructor() {
        this.repository = ClientRepository.getInstance();
    }

    addClient = (req: Request, res: Response) => {
        const client: ClientInterface = this.buildClientFromBody(req, res);
        this.repository.addClient(client, (err, response) => {
            if (err) {
                return res.status(500).send({
                    status: 500,
                    error: err.message
                })
            }
            return res.send({
                status: 200,
                createdClient: response
            });
        }, (errorMessage) => res.status(400))
    };

    checkout = (req: Request, res: Response) => {
    };

    getAllClients = (req: Request, res: Response) => {
    };

    getClientByUsername = (req: Request, res: Response) => {
    };

    removeClient = (req: Request, res: Response) => {
    };

    updateClient = (req: Request, res: Response) => {
    };
}