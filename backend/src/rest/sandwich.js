var express = require('express');
var router = express.Router();
var sandwich = require('../service/').sandwich;

router.get('/', sandwich.list);
router.get('/:id', sandwich.findById);
router.post('/', sandwich.create);
// router.put('/:id',user.update);
router.delete('/:id', sandwich.delete);
module.exports = router;