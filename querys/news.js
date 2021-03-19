const db = require("../models");
const Entry = db.Entry;

exports.getEntry = async (entryId) => {
  try {
    const entry = await Entry.findAll({
      where: { id: entryId, type: "news" },
    });
    return entry;
  } catch (error) {
    console.log(error);
  }
};

exports.getTypeNews = async (typeNews) => {
  try {
    const news = await Entry.findAll({
      where: { type: typeNews },
      attributes: ["id", "name", "image", "createdAt"],
    });
    return news;
  } catch (error) {
    console.log(error);
  }
};

exports.createEntry = async (news) => {
  try {
    const newNews = await Entry.create(news);
    return newNews;
  } catch (error) {
    console.log(error);
  }
};

exports.deleteNews = async (id) => {
  try {
    return await Entry.destroy({ where: { id, type: "news" } });
  } catch (error) {
    console.log(error);
  }
};
