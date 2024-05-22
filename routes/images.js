const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');

const imagesCtrl = require('../controllers/images');

router.get('/', imagesCtrl.getAllImages);
router.post('/', auth,imagesCtrl.createImage);
router.get('/:id', imagesCtrl.getOneImage);
router.put('/:id', auth, imagesCtrl.modifyImage);
router.delete('/:id', auth, imagesCtrl.deleteImage);

module.exports = router;
