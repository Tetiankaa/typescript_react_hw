import Joi from "joi";

const userValidator = Joi.object({
    name:Joi.required(),
    username:Joi.required(),
    email:Joi.string().pattern(/^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/).required().messages({
        'string.pattern.base':'Invalid email address format. Example: test@gmail.com'
    }),
    phone:Joi.string().pattern(/^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/).required().messages({
        'string.pattern.base':'Invalid phone number format.'
    })
})
export {userValidator}