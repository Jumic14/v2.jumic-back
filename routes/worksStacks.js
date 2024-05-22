const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');

const worksStacksCtrl = require('../controllers/worksStacks');

router.get('/', worksStacksCtrl.getAllWorkStacks);
router.post('/', auth, worksStacksCtrl.createWorkStack);
router.get('/:id', worksStacksCtrl.getWorkStack);
router.delete('/:id', auth, worksStacksCtrl.deleteWorkStack);

module.exports = router;
