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

exports.updateActivity = (activityId, name, content) => {
    return Activities.update({name, content}, {
        where: {id: activityId},
        returning: true,
        plain: true});
};

exports.getActivity = (activityId) => {
    return Activities.findOne({where: {id: activityId}});
};