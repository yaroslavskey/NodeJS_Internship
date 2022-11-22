const { Router } = require('express');
const UserComponent = require('./index');
const VerifyService = require('./virifyToken');

const router = Router();



router.get('/:id', VerifyService.verifyToken, UserComponent.find);

router.delete('/:id', VerifyService.verifyToken, UserComponent.del);

router.post('/', VerifyService.verifyToken, UserComponent.create);

router.put('/', VerifyService.verifyToken, UserComponent.update);

router.post('/login', UserComponent.autorization);

module.exports = router;
