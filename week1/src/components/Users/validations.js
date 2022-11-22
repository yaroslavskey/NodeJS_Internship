const Joi = require('joi');


exports.userValidation = (data) => {
    const shema = Joi.object().keys({
        id: Joi.number().min(1).max(5).required(),
        name: Joi.string().min(3).max(255).required(),
        username: Joi.string().min(3).max(255).required(),
        email: Joi.string().min(3).max(255).email().required(),
    })

    return shema.validate(data);
};

exports.numberValidation = (data) => {
    const shema = Joi.number().required();

    return shema.validate(data);
};

exports.loginValidation = (data) => {
    const shema = Joi.object().keys({
        email: Joi.string().email().required(),
        pass: Joi.number().required(),
    })

    return shema.validate(data);
};

