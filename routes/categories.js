const express = require("express");
const router = express.Router();

const auth = require('../middleware/auth');


const categoriesCtrl = require("../controllers/categories");

router.get("/", categoriesCtrl.getAllCategories);
router.post("/", auth, categoriesCtrl.createCategory);
router.get("/:id", categoriesCtrl.getOneCategory);
router.put("/:id", auth, categoriesCtrl.modifyCategory);
router.delete("/:id", auth, categoriesCtrl.deleteCategory);

module.exports = router;
