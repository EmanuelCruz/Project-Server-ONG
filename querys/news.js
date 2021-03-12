const db = require("../models");
const News = db.Entry;

exports.getTypeNews = (typeNews) => {
  return News.findAll({
    where: { type: typeNews },
    attributes: ["name", "image", "createdAt"],
  });
};
