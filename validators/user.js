import Joi from "joi";


export const registerUserValidationSchema = Joi.object({
    firstName:Joi.string().alphanum().min(3).max(30).required(),

    lastName:Joi.string().alphanum().min(3).max(30).required(),

    password:Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
    // repeat_password: Joi.ref('password'),

    email:Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required()
});

// export const UserSchema = model('User', Schema);

// const { error } = schema.validate(req.body);
// if (error) return res.status(400).json({ success: false, message: error. details[0].message });
    // next ();
    

export const loginUserValidationSchema =Joi.object ({ 
        firstName: Joi.string().alphanum().min(3).max(30),
    
        lastName: Joi.string().alphanum().min(3).max(30),
    
    
        password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
        // repeat_password: Joi.ref('password'),
    
        email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required()
    });

