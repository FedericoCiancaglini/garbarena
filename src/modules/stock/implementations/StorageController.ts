import {Request, Response} from "express";
import {StorageController as StorageControllerInterface} from "../interfaces/StorageController";
import {StorageRepository} from "../repositories/StorageRepository";
import {StorageLocation as StorageLocationInterface} from "../interfaces/StorageLocation";
import {StorageLocation} from "./StorageLocation";

export class StorageController implements StorageControllerInterface {
    
    private repository: StorageRepository;

    constructor() {
        this.repository = StorageRepository.getInstance();
    }
    
    addSellableToStorage = (req: Request, res: Response) => {
        const storage: StorageLocationInterface = this.buildStorageFromBody(req, res);
        this.repository.addStorage(storage, (err, createdStorage) => {
            if (err) {
                return res.status(500).send({
                    status: 500,
                    error: err.message
                });
            } else {
                return res.send({
                    status: 200,
                    createdStorage: createdStorage
                });
            }
        }, (errorMessage) => res.status(400).send({status: 400, error: errorMessage}))
    };

    getAllSellablesByStorage = (req: Request, res: Response) => {
    };

    getStockForSellable = (req: Request, res: Response) => {
    };

    getStockMapForSellable = (req: Request, res: Response) => {
    };

    removeSellableFromStorage = (req: Request, res: Response) => {
    };

    updateSellableFromStorage = (req: Request, res: Response) => {
    };

    private buildStorageFromBody(req: Request, res: Response) {
        return new StorageLocation(req.body);
    }
}