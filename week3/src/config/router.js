const express = require('express');
const http = require('http');



// ROUTERS
const DemoRouter = require('../components/Demo/router');
const UsersRouter = require('../components/Users/router');
const TaskRouter = require('../components/Task/router');

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger/swagger.json');

module.exports = {
    init(app) {
        const router = express.Router();

        app.use('/v1/demo', DemoRouter);
        app.use('/v1/users', require('morgan')('dev'), UsersRouter);
        app.use('/v1/task', require('morgan')('dev'), TaskRouter);
        app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

        app.use((req, res) => {
            res.status(404).send(http.STATUS_CODES[404]);
        });

        app.use(router);
    },
};
