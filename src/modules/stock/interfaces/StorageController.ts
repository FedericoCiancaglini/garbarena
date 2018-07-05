import {Request, Response} from "express";

export interface StorageController {
    addStorage(req: Request, res: Response): void
    addSellableToStorage(req: Request, res: Response): void
    getAllSellablesByStorage(req: Request, res: Response): void
    removeSellableFromStorage(req: Request, res: Response): void
    updateSellableFromStorage(req: Request, res: Response): void
    getStockForSellable(req: Request, res: Response): void
    getStockMapForSellable(req: Request, res: Response): void
}