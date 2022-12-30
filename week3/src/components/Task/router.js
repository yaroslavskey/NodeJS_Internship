const { Router } = require('express');
const TaskComponent = require('./index');
const VerifyService = require('../virifyToken');

const router = Router();

router.get('/', VerifyService.verifyToken, TaskComponent.find);

router.get('/all', VerifyService.verifyToken, TaskComponent.findAll);

router.post('/', VerifyService.verifyToken, TaskComponent.create);

router.patch('/:id', VerifyService.verifyToken, TaskComponent.update);



module.exports = router;
