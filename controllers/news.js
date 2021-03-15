const newsQuery = require("../querys/news");
var consts = require("../constant/const");

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
