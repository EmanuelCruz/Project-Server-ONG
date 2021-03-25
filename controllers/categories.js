const consts = require("../constant/const");
const categoriesQuery = require("../querys/categories");

// Categories UPDATE
exports.categoriesUpdate = async (req, res, next) => {
  const categoryId = req.params.id;
  const newCategoryData = req.body;

  try {
    const categoryInDataBase = await categoriesQuery.getCategoryById(
      categoryId
    );

    if (categoryInDataBase) {
      await categoriesQuery.updateCategoryById(newCategoryData, categoryId);
      res.status(consts.code_success).send(consts.SUCCESS_CATEGORY_UPDATE);
    } else
      res.status(consts.code_failure).send(consts.ERROR_CATEGORIES_NOT_FOUND);
  } catch (err) {
    res.status(consts.code_failure).send(consts.ERROR_DELETE_CATEGORIES);
  }
};
