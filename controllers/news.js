const newsQuery = require("../querys/news");
const consts = require("../constant/const");

exports.getNews = (req, res, next) => {
  newsQuery
    .getTypeNews("news")
    .then((org) => {
      res.status(consts.code_success).send(org);
    })
    .catch((err) =>
      res.status(consts.code_failure).send({ message: err.message })
    );
};
