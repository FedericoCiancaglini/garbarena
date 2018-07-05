import {PersonController} from "./modules/person/implementations/PersonController";

const router = require('express').Router();
const personController = new PersonController();

// Person
router.post('/api/person/add', personController.addPerson);
router.get('/api/person/id/:userKey', personController.getPerson);
router.get('/api/person/all', personController.getAllPeople);
router.put('/api/person/update', personController.updatePerson);


export default router;
