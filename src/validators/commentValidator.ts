import Joi from "joi";

const commentValidator = Joi.object({
    postId:Joi.number().min(1).max(100).required(),
    name:Joi.string().pattern(/^.{1,40}$/).required().messages({
        'string.pattern.base':'Max length 40 characters'
    }),
    email:Joi.string().pattern(/^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/).required().messages({
        'string.pattern.base':'Invalid email address format. Example: test@gmail.com'
    }),
    body:Joi.string().pattern(/^.{1,500}$/).required().messages({
        'string.pattern.base':"Max length 500 characters"
    })
})

export {commentValidator}