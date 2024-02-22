import Joi from "joi";

const carValidator = Joi.object({
    brand:Joi.string().pattern(/^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/).required().messages({
        'string.pattern.base':'Please enter a valid name. It must consist of 1 to 20 characters and can include letters from the Latin and Cyrillic alphabets, as well as specific Ukrainian characters (ё, Ё, і, І, ї, Ї).'
    }),
    price:Joi.number().min(0).max(1000000).required(),
    year:Joi.number().min(1990).max(2023).required()
})

export {
    carValidator
}