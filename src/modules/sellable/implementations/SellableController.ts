import { Request, Response } from "express";
import {SellableController as SellableControllerInterface} from "../interfaces/SellableController";
import {SellableRepository} from "../repositories/SellableRepository";
import {Sellable as SellableInterface} from "../interfaces/Sellable";
import {Combo} from "./Combo";
import {Product} from "./Product";

export class SellableController implements SellableControllerInterface {
    
    private repository: SellableRepository;

    constructor() {
        this.repository = SellableRepository.getInstance();
    }
    
    addSellable = (req: Request, res: Response) => {
        const sellable: SellableInterface = this.buildSellableFromBody(req, res);
        this.repository.addSellable(sellable, (err, createdSellable) => {
            if (err) {
                return res.status(500).send({
                    status: 500,
                    error: err.message
                });
            } else {
                return res.send({
                    status: 200,
                    createdSellable: createdSellable
                });
            }
        }, (errorMessage) => res.status(400).send({status: 400, error: errorMessage}))
    };

    getAllSellables = (req: Request, res: Response) => {
        this.repository.getAllProducts((error: any, response: any) => {
            if (response) {
                return res.send({
                    status: 200,
                    sellables: response
                })
            } else {
                return res.status(500).send({
                    status: 500,
                    error: "Error obtaining all sellables"
                })
            }
        })
    };

    getReccomendationsForSellable = (req: Request, res: Response) => {
    };

    getSellableByCategory = (req: Request, res: Response) => {
    };

    getSellableByName = (req: Request, res: Response) => {
    };

    removeSellable = (req: Request, res: Response) => {
    };

    updateSellable = (req: Request, res: Response) => {
    };

    private buildSellableFromBody(req: Request, res: Response): SellableInterface {
        const type = req.body.type.value;
        if (type === 'Combo') {
            return new Combo(req.body);
        } else {
            return new Product(req.body);
        }
    }
}