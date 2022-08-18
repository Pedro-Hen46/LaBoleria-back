import { Router } from "express";

import schemaChecker from "../middlewares/schemaChecker.js";
import createClientSchema from "../schemas/clientsSchemas.js";
import createClient from "../controllers/clientsController.js";

const clientsRouter = Router();

clientsRouter.post('/clients', schemaChecker(createClientSchema),  createClient);


export default clientsRouter;
