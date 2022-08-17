import { Router } from "express";

import schemaChecker from "../middlewares/schemaChecker.js";
import { checkNameConflict } from "../middlewares/checkNameConflict.js";

import createCake from "../controllers/cakesController.js";
import createCakesSchema  from "../schemas/cakesSchema.js"

const cakesRouter = Router();

cakesRouter.post('/cakes', schemaChecker(createCakesSchema), checkNameConflict, createCake);


export default cakesRouter;
