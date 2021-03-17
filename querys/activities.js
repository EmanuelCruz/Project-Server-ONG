const db = require("../models");
const Activities = db.Activities;

exports.createActivities = async (name, content) => {
    try {
        const activity = await Activities.create({
            name: name,
            content: content,
        });
        return activity;
    } catch (err) {
        return err;
    }
};
