const express = require("express");
const router = express.Router();
const categoriesController = require("../controllers/categories");
const consts = require("../constant/const");

// Update categories endpoint
router.put(consts.URL_CATEGORIES_UPDATE, categoriesController.categoriesUpdate);

// Get all categories
router.get(consts.URL_CATEGORIES_GET, categoriesController.getCategories);

// Create a category
router.post(consts.URL_CATEGORIES_POST,
            categoriesController.categoriesValidationRules(),
            categoriesController.validate,
            categoriesController.createCategory);

module.exports = router;
