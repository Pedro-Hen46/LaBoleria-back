import joi from "joi";

const createOrderSchema = joi.object({
  clientId: joi.number().greater(0).required(),
  cakeId: joi.number().greater(0).required(),
  quantity: joi.number().greater(0).less(5),
  totalPrice: joi.number().required(),
});

const paramsId = joi.object({
  id: joi.number().greater(0).required(),
});

export { createOrderSchema, paramsId };
