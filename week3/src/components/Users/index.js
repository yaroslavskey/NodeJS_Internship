const UserService = require('./service');
const jwt = require('jsonwebtoken');
const validation = require('../validations');

const UsersDB = require('./userShema');
const bcrypt = require('bcrypt');

require('dotenv').config();

async function find(req, res) {
    try {
        const result = validation.userValidation(req.body);

        if (result.error) {
            return res.status(422).json({
                message: 'Invalid request'
            });
        }

        const demo = await UserService.find(req.body);

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
        const result = validation.userValidation(req.body);

        if (result.error) {
            return res.status(422).json({
                message: 'Invalid request'
            });
        }

        const demo = await UserService.del(req.body);

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
    const resul = validation.userValidation(req.body);

    if (resul.error) {
        return res.status(422).json({
            message: 'Invalid request'
        });
    }
    const result = await UsersDB.findOne({ email: req.body.email });
    const hashResult = bcrypt.compareSync(req.body.password, result.password);
    if (hashResult) {
        const token = jwt.sign({
            email: req.body.email,
            userId: result._id
        }, process.env.SECRET, { expiresIn: 60 * 60 });

        res.status(200).json({
            token: token
        })
    } else {
        res.status(404).json({
            message: 'User not autorization'
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
