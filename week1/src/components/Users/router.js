const { Router } = require('express');
const UserComponent = require('./index');

const router = Router();

router.get('/:id', UserComponent.find);

router.delete('/:id', UserComponent.del);

router.post('/:obj', UserComponent.create);

router.put('/:obj', UserComponent.update);

module.exports = router;