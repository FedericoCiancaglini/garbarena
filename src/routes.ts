import {PersonController} from "./modules/person/implementations/PersonController";
import {SellableController} from "./modules/sellable/implementations/SellableController";

const router = require('express').Router();
const personController = new PersonController();
const sellableController = new SellableController();

// Person
router.post('/api/person/add', personController.addPerson);
router.get('/api/person/id/:userKey', personController.getPerson);
router.get('/api/person/all', personController.getAllPeople);
router.put('/api/person/update', personController.updatePerson);

// Sellable
router.post('/api/sellable/add', sellableController.addSellable);
router.get('/api/sellable/all', sellableController.getAllSellables);


export default router;
