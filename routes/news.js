var express = require("express");
var router = express.Router();

var newsController = require("../controllers/news");
var consts = require("../constant/const");

/* GET news*/
router.get("/", newsController.getNews);
/* GET news by ID. */
router.get(consts.URL_NEWS_ID, newsController.getNewsById);

module.exports = router;
