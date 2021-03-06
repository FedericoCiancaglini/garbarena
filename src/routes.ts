import {PersonController} from "./modules/person/implementations/PersonController";
import {SellableController} from "./modules/sellable/implementations/SellableController";
import {ClientController} from "./modules/client/implementations/ClientController";
import {StorageController} from "./modules/stock/implementations/StorageController";

const router = require('express').Router();
const personController = new PersonController();
const clientController = new ClientController();
const storageController = new StorageController()
const sellableController = new SellableController();

// Person
router.post('/api/person/add', personController.addPerson);
router.get('/api/person/id/:userKey', personController.getPerson);
router.get('/api/person/all', personController.getAllPeople);
router.put('/api/person/update', personController.updatePerson);

// Client
router.post('/api/client/add', clientController.addClient);

// Storage
router.post('/api/storage/add', storageController.addStorage);

// Sellable
router.post('/api/sellable/add', sellableController.addSellable);
router.get('/api/sellable/name/:name', sellableController.getSellableByName);
router.get('/api/sellable/all', sellableController.getAllSellables);
router.post('/api/sellable/buy', sellableController.buySellable);


export default router;
