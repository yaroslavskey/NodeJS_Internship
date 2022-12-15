const { Router } = require('express');
const DemoComponent = require('./index');

const router = Router();

router.get('/:id', DemoComponent.findAll);

router.post('/', DemoComponent.create);

module.exports = router;
