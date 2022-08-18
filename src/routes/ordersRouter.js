import { Router } from "express";

import schemaChecker from "../middlewares/schemaChecker.js";

import {createOrder, getOrders, getOrderById, getOrdersByClient} from "../controllers/ordersControllers.js";

import {createOrderSchema} from "../schemas/ordersSchemas.js";

const orderRouter = Router();

orderRouter.post('/order', schemaChecker(createOrderSchema), createOrder);
orderRouter.get('/orders', getOrders)
orderRouter.get('/orders/:id', getOrderById)
orderRouter.get('/clients/:id/orders', getOrdersByClient)


export default orderRouter;
