var express = require('express');
var router = express.Router();
var pizza = require('../service/').pizza;

router.get('/', pizza.list);
router.get('/:id', pizza.findById);
router.post('/', pizza.create);
router.put('/:id',pizza.update);
router.delete('/:id', pizza.delete);
module.exports = router;