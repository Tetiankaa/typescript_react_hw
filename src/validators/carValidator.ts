import Joi from "joi";

export const carValidator = Joi.object({
    brand:Joi.string().pattern(/^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/).required().messages({
        'string.pattern.base':"only letters min length 1 and max length 20"
    }),
    price:Joi.number().min(0).max(1_000_000).required(),
    year:Joi.number().min(1990).max(new Date().getFullYear()).required()
})
