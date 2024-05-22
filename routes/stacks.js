const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');

const stacksCtrl = require('../controllers/stacks');

router.get('/', stacksCtrl.getAllStacks);
router.post('/', auth, stacksCtrl.createStack);
router.get('/:id', stacksCtrl.getOneStack);
router.put('/:id', auth, stacksCtrl.modifyStack);
router.delete('/:id', auth, stacksCtrl.deleteStack);

module.exports = router;
