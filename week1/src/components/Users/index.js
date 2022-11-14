const UserService = require('./service');

async function find(req, res) {
    try {
        if(Number.isNaN(req.params.id) || typeof req.params.id != 'undefined') {
        const demo = await UserService.find(req.params.id);
        
        return res.status(200).json({
            data: demo,
        });
    }
    } catch (error) {
        return res.status(500).json({
            error: error.message,
            details: null,
        });
    }
}

async function del(req, res) {
    try {
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
        const demo = await UserService.create(JSON.parse(req.params.obj));

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
        const demo = await UserService.update(JSON.parse(req.params.obj));

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
    del,
    update,
};
