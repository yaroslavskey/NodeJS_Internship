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
