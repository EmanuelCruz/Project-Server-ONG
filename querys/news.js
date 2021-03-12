const db = require("../models");
const Entry = db.Entry;

exports.getEntry = (entryId) => {
    try {
        return Entry.findAll({
            where: { id: entryId, type: "news" },
        });
    } catch (error) {
        console.log(error);
    }
};

exports.getTypeNews = (typeNews) => {
    return Entry.findAll({
        where: { type: typeNews },
        attributes: ["name", "image", "createdAt"],
    });
};
