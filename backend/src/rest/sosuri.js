var express = require('express');
var router = express.Router();
var sosuri = require('../service/').sosuri;

router.get('/', sosuri.list);
router.get('/:id', sosuri.findById);
router.post('/', sosuri.create);
// router.put('/:id',user.update);
router.delete('/:id', sosuri.delete);
module.exports = router;