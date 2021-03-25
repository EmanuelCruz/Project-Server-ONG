const express = require("express");
const router = express.Router();
const categoriesController = require("../controllers/categories");
const consts = require("../constant/const");

// Update categories endpoint
router.put(consts.URL_CATEGORIES_UPDATE, categoriesController.categoriesUpdate);

// Delete categories endpoint
router.delete(
  consts.URL_CATEGORIES_DELETE,
  categoriesController.categoriesDelete
);

module.exports = router;
