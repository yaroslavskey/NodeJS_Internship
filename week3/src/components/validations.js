const Joi = require('joi');

exports.userValidation = (data) => {
    const shema = Joi.object().keys({
        name: Joi.string().min(3).max(255).required(),
        username: Joi.string().min(3).max(255).required(),
        email: Joi.string().min(3).max(255).email()
.required(),
        password: Joi.string().min(3).max(255).required(),
    })

    return shema.validate(data);
};

exports.taskValidation = (data) => {
    const shema = Joi.object().keys({
        title: Joi.string().min(3).max(255).required(),
        description: Joi.string().min(3).max(255).required(),
        estimatedTime: Joi.number().required(),
        createdBy: Joi.string().min(3).max(255).required()
    })

    return shema.validate(data);
};

exports.idValidation = (data) => {
    const shema = Joi.string().required();

    return shema.validate(data);
};
