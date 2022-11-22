const UserService = require('./service');
const jwt = require('jsonwebtoken');
const config = require('./config');
const validation = require('./validations');

async function find(req, res) {
    try {
        const result = validation.numberValidation(req.params.id);

        if (result.error) {
            return res.status(422).json({
                message: 'Invalid request'
            });
        }

        const demo = await UserService.find(req.params.id);

        return res.status(200).json({
            data: demo,
        });
    } catch (error) {
        return res.status(500).json({
            error: error.message,
            details: null,
        });
    }
}

async function del(req, res) {
    try {
        const result = validation.numberValidation(req.params.id);

        if (result.error) {
            return res.status(422).json({
                message: 'Invalid request'
            });
        }

        const demo = await UserService.del(req.params.id);

        return res.status(200).json({
            data: demo,
        });
    } catch (error) {
        return res.status(500).json({
            error: error.message,
            details: null,
        });
    }
}

async function create(req, res) {
    try {
        const result = validation.userValidation(req.body);

        if (result.error) {
            return res.status(422).json({
                message: 'Invalid request'
            });
        }

        const demo = await UserService.create(req.body);

        return res.status(201).json({
            data: demo,
        });
    } catch (error) {
        return res.status(500).json({
            error: error.message,
            details: null,
        });
    }
}

async function update(req, res) {
    try {
        const result = validation.userValidation(req.body);

        if (result.error) {
            return res.status(422).json({
                message: 'Invalid request'
            });
        }

        const demo = await UserService.update(req.body);

        return res.status(201).json({
            data: demo,
        });
    } catch (error) {

        return res.status(500).json({
            error: error.message,
            details: null,
        });
    }
}

async function autorization(req, res) {
    const result = validation.loginValidation(req.body);

    if (result.error) {
        return res.status(422).json({
            message: 'Invalid request'
        });
    }

    if (config.login.email == req.body.email && config.login.pass == req.body.pass) {
        const token = jwt.sign({
            email: req.body.email
        }, config.secret, { expiresIn: 60 * 60 });

        res.status(200).json({
            token: token
        })
    } else {
        res.status(404).json({
            message: 'User not found'
        });
    }
}


module.exports = {
    find,
    create,
    del,
    update,
    autorization,
};
