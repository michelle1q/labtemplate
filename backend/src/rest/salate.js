var express = require('express');
var router = express.Router();
var salate = require('../service/').salate;

router.get('/', salate.list);
router.get('/:id', salate.findById);
router.post('/', salate.create);
router.put('/:id',salate.update);
router.delete('/:id', salate.delete);
module.exports = router;