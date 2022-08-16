
import { Router } from 'express'
import clientsRouter from '../routes/clientsRouter.js'
import cakesRouter from '../routes/cakesRouter.js'
import ordersRouter from '../routes/ordersRouter.js'

const router = Router()

router.use(cakesRouter)
router.use(clientsRouter)
router.use(ordersRouter)

export default router