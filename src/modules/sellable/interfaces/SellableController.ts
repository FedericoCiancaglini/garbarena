import { Request, Response } from "express";


export interface SellableController {
    addSellable(req: Request, res: Response): void
    getAllSellables(req: Request, res: Response): void
    getSellableByName(req: Request, res: Response): void
    getSellableByCategory(req: Request, res: Response): void
    removeSellable(req: Request, res: Response): void
    updateSellable(req: Request, res: Response): void
    getReccomendationsForSellable(req: Request, res: Response): void
}