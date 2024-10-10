import Joi from "joi";

    export const authorValidationSchema = Joi.object({

        name:Joi.string().required(),
        bio:Joi.string().required(),
    })

    export const updateAuthorValidationSchema = Joi.object({

        name:Joi.string().required(),
        bio:Joi.string().required(),
    })