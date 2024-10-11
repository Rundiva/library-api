import Joi from "joi";

    export const bookValidationSchema = Joi.object({

        title:Joi.string().required(),
        summary:Joi.string() ,
         author:Joi.string(),
         cover:Joi.string().required(),
         content:Joi.string().required(),

    })

    export const updateBookValidationSchema = Joi.object({

        title:Joi.string(),
        summary:Joi.string() ,
        author:Joi.string(),
         cover:Joi.string(),
         content:Joi.string(),

    })