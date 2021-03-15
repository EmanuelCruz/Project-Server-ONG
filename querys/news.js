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
            attributes: ["name", "image", "createdAt"],
        });
        return news;
    } catch (error) {
        console.log(error);
    }
};
