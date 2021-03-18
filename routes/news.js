var express = require("express");
var router = express.Router();
const multer = require("multer");
var newsController = require("../controllers/news");
var consts = require("../constant/const");

/* GET news*/
router.get("/", newsController.getNews);
/* GET news by ID. */
router.get(consts.URL_NEWS_ID, newsController.getNewsById);
/*POST news*/
router.post(
  "/",
  multer(consts.MULTER_DESTINATION_PARAMS).single(consts.MULTER_KEY_NAME),
  newsController.createNews
);

module.exports = router;
