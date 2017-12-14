var express = require('express');
var router = express.Router();
var bauturi = require('../service/').bauturi;

router.get('/', bauturi.list);
router.get('/:id', bauturi.findById);
router.post('/', bauturi.create);
// router.put('/:id',user.update);
router.delete('/:id', bauturi.delete);
module.exports = router;