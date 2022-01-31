import Joi from "joi";

export const carValidation = Joi.object({
    model: Joi.string().regex(new RegExp('^[a-zA-ZА-яёЁіІїЇ]{1,20}$')).required().messages({
        'string.empty' : 'Строка не може бути пуста',
        'string.pattern.base' : 'Тільки букви мін 1 , макс 20',
    }),
    price: Joi.number().min(0).max(1000000).required().messages({
        'number.base' : 'Не пусте. І тільки цифри',
        'number.min' : 'Не менше 0',
        'number.max' : 'не більше 1000000',
    }),
    year: Joi.number().min(1900).max(new Date().getFullYear()).required().messages({
        'number.base' : 'Не пусте. І тільки цифри',
        'number.min' : 'Не менше 1900 року',
        'number.max' : `Не більше ${new Date().getFullYear()}`,
    })
})
