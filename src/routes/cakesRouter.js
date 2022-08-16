import { Router } from "express";

import { schemaChecker } from "../middlewares/schemaChecker.js";
import { checkNameConflict } from "../middlewares/checkNameConflict.js";

import { cakesController } from "../controllers/cakesController.js";

import { createCakes } from "../schemas/cakesSchema.js"

const cakesRouter = Router();

cakesRouter.post('/cakes', schemaChecker(createCakes), checkNameConflict, cakesController);


export default cakesRouter;
