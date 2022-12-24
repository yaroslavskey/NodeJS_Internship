const { Router } = require('express');
const UserComponent = require('./index');
const VerifyService = require('../virifyToken');
const router = Router();

router.get('/', VerifyService.verifyToken, UserComponent.find);

router.delete('/', VerifyService.verifyToken, UserComponent.del);

router.post('/', VerifyService.verifyToken, UserComponent.create);

router.put('/', VerifyService.verifyToken, UserComponent.update);

router.post('/autorization', UserComponent.autorization);

module.exports = router;
