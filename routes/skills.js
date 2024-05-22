const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');

const skillsCtrl = require('../controllers/skills');

router.get('/', skillsCtrl.getAllSkills);
router.post('/', auth, skillsCtrl.createSkill);
router.get('/:id', skillsCtrl.getOneSkill);
router.put('/:id', auth, skillsCtrl.modifySkill);
router.delete('/:id', auth, skillsCtrl.deleteSkill);

module.exports = router;
