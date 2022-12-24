const TaskService = require('./service');

const validation = require('../validations');

require('dotenv').config();

async function find(req, res) {
    try {
        const result = validation.taskValidation(req.body);

        if (result.error) {
            return res.status(422).json({
                message: 'Invalid request'
            });
        }

        const demo = await TaskService.find(req.userId, req.query.page);

        return res.status(200).json({
            code: 200,
            data: {
                tasks: demo.res,
                length: demo.len
            }
        });
    } catch (error) {
        return res.status(500).json({
            error: error.message,
            details: null,
        });
    }
}

async function findAll(req, res) {
    try {
        const result = validation.taskValidation(req.body);

        if (result.error) {
            return res.status(422).json({
                message: 'Invalid request'
            });
        }

        const demo = await TaskService.findAll(req.userId);

        return res.status(200).json({
            code: 200,
            data: {
                tasks: demo,
            }
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
        const result = validation.taskValidation(req.body);

        if (result.error) {
            return res.status(422).json({
                message: 'Invalid request'
            });
        }

        req.body.assignee = req.userId;

        const demo = await TaskService.create(req.body);

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
        const result = validation.idValidation(req.params.id);

        if (result.error) {
            return res.status(422).json({
                message: 'Invalid request'
            });
        }

        const demo = await TaskService.update({
            userId: req.userId,
            taskId: req.params.id,
            time: req.body.estimatedTime
        });

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

module.exports = {
    find,
    create,
    findAll,
    update,
};
