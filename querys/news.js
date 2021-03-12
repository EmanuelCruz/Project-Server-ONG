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
