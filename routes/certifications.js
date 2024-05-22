const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');

const certificationsCtrl = require('../controllers/certifications');

router.get('/', certificationsCtrl.getAllCertifications);
router.post('/', auth, certificationsCtrl.createCertification);
router.get('/:id', certificationsCtrl.getOneCertification);
router.put('/:id', auth, certificationsCtrl.modifyCertification);
router.delete('/:id', auth, certificationsCtrl.deleteCertification);

module.exports = router;
    