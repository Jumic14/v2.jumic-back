const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');

const curriculumsCtrl = require('../controllers/curriculums');

router.get('/', curriculumsCtrl.getAllCurriculums);
router.post('/', auth, curriculumsCtrl.createCurriculum);
router.get('/:id', curriculumsCtrl.getOneCurriculum);
router.put('/:id', auth, curriculumsCtrl.modifyCurriculum);
router.delete('/:id', auth, curriculumsCtrl.deleteCurriculum);

module.exports = router;
