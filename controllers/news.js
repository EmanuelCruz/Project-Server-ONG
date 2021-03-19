const newsQuery = require("../querys/news");
var consts = require("../constant/const");
const updateEntry = require("../querys/news");
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

exports.updateNews = (req, res) => {
  if (!req.params.id) {
    res
      .status(consts.FORBIDDEN_ACTION_CODE)
      .send({ error: consts.NOT_FOUND_USER });
  } else {
    const news = {
      name: req.body.name,
      content: req.body.content,
      categoryId: req.body.categoryId,
    };
    uploadImage(req, (img) => {
      news["image"] = img;
      newsQuery
        .updateEntry(news, req.params.id)
        .then((dataNews) => {
          if (dataNews.length == consts.ARRAY_ENPTY) {
            throw new Error(consts.NOT_FOUND_USER);
          }
          res.status(consts.code_success).json(dataNews);
        })
        .catch((err) => {
          res.status(consts.code_failure).send({ Error: err.message });
        });
    });
  }
};
