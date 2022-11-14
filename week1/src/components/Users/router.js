const { Router } = require('express');
const UserComponent = require('./index');

const router = Router();

router.get('/:id', UserComponent.find);

router.delete('/:id', UserComponent.del);

router.post('/', UserComponent.create);

router.put('/', UserComponent.update);

module.exports = router;