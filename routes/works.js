const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');

const worksCtrl = require('../controllers/works');

router.get('/', worksCtrl.getAllWorks);
router.post('/', auth, worksCtrl.createWork);
router.get('/:id', worksCtrl.getOneWork);
router.put('/:id', auth, worksCtrl.modifyWork);
router.delete('/:id', auth, worksCtrl.deleteWork);

module.exports = router;
