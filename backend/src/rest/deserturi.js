var express = require('express');
var router = express.Router();
var deserturi = require('../service/').deserturi;

router.get('/', deserturi.list);
router.get('/:id', deserturi.findById);
router.post('/', deserturi.create);
// router.put('/:id',user.update);
router.delete('/:id', deserturi.delete);
module.exports = router;