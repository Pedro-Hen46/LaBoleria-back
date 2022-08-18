import { Router } from "express";

import cakesRouter from "../routes/cakesRouter.js";
import clientsRouter from "../routes/clientsRouter.js";

const router = Router()

router.use(cakesRouter)
router.use(clientsRouter)
//router.use(ordersRouter)

export default router