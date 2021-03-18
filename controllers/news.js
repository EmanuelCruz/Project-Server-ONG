const newsQuery = require("../querys/news");
var consts = require("../constant/const");
const uploadImage = require("../services/aws/s3UploadImage");

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

exports.getNewsById = (req, res, next) => {
  const entryId = req.params.id;
  newsQuery
    .getEntry(entryId)
    .then((dataEntry) => {
      if (dataEntry.length === consts.ARRAY_ENPTY) {
        res.status(consts.code_success).send({
          message: consts.MESSAGE_NOT_FOUND,
        });
      } else {
        res.status(consts.code_success).send(dataEntry);
      }
    })
    .catch((err) =>
      res.status(consts.code_failure).send({ message: err.message })
    );
};

exports.createNews = (req, res) => {
  if (!req.body.name || !req.body.content || !req.body.categoryId) {
    res
      .status(consts.FORBIDDEN_ACTION_CODE)
      .send({ error: consts.MISING_FIELDS });
  } else {
    const news = {
      name: req.body.name,
      content: req.body.content,
      categoryId: req.body.categoryId,
    };
    uploadImage(req, (img) => {
      news["image"] = img;
      newsQuery
        .createEntry(news)
        .then((dataNews) => {
          res.status(consts.code_success).json(dataNews);
        })
        .catch((err) => {
          res.status(consts.code_failure).send({ message: err.message });
        });
    });
  }
};
