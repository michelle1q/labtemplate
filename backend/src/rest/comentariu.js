var express = require('express');
var router = express.Router();
var comentariu = require('../service/').comentariu;

router.get('/', comentariu.list);
router.get('/:id', comentariu.findById);
router.post('/', comentariu.create);
router.put('/:id',comentariu.update);
router.delete('/:id', comentariu.delete);
module.exports = router;