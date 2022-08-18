import { Router } from "express";

import cakesRouter from "../routes/cakesRouter.js";
import clientsRouter from "../routes/clientsRouter.js";
import orderRouter from "../routes/ordersRouter.js";

const router = Router()

router.use(cakesRouter)
router.use(clientsRouter)
router.use(orderRouter)

export default router;