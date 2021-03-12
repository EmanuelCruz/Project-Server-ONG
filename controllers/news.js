const newsQuery = require("../querys/news");
var consts = require("../constant/const");

exports.getAllNews = (req, res, next) => {
    try {
        res.send({ ruta: "/news" });
    } catch (error) {
        res.send(error);
    }
};
exports.getNewsById = (req, res, next) => {
    try {
        const entryId = req.params.id;
        newsQuery
            .getEntry(entryId)
            .then((dataEntry) => {
                if (dataEntry.length === 0) {
                    res.status(consts.code_success).send({
                        message: "News Not found",
                    });
                } else {
                    res.status(consts.code_success).send(dataEntry);
                }
            })
            .catch((err) =>
                res.status(consts.code_failure).send({ message: err.message })
            );
    } catch (error) {
        res.send(error);
    }
};
