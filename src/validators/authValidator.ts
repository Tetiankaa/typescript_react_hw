import Joi from "joi";

const authValidator = Joi.object({
    username:Joi.string().pattern(/^[a-zA-Z]\w{1,19}$/).required().messages({
        'string.pattern.base':'Please enter a valid username. It must start with a letter and can be followed by 1 to 19 letters, digits, or underscores.'
    }),
    password:Joi.string().pattern(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\s])[^\s]{8,20}$/).required().messages({
        'string.pattern.base':'Please enter a valid password. It must Contain at least 1 digit,1 uppercase letter, 1 lowercase letter, 1 special character,not contain any spaces, have a length between 8 and 20 characters'
    }),
    re_password:Joi.any().equal(Joi.ref('password')).messages({
        'any.only':'Passwords does not match'
    })
})
export {
    authValidator
}