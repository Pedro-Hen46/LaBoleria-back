import joi from "joi";

const createCakes = joi.object({
    name: joi.string().min(2).required(),
    price: joi.number().greater(0).required(0),
    description: joi.string().allow('').required(),
    image: joi.string()
        .uri()
        .pattern(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/)
        .required()
})