const db = require("../models");
const Activities = db.Activities;

exports.createActivities = async (name, content) => {
    return (activity = await Activities.create({
        name: name,
        content: content,
    }));
};

exports.updateActivity = (activityId, name, content) => {
    return Activities.update({name, content}, {
        where: {id: activityId},
        returning: true,
        plain: true});
};

exports.getActivities = () => {
    return Activities.findAll();
};

exports.getActivity = (activityId) => {
    return Activities.findOne({where: {id: activityId}});
};