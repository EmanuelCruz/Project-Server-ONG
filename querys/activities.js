const db = require("../models");
const Activities = db.Activities;
const consts = require("../constant/const");

exports.createActivities = async (activity) => {
    return (activity = await Activities.create(activity));
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

exports.deleteOneActivity = async (activityId) => {
    try {
        let activityDestroyed = await Activities.destroy({
            where: { id: activityId },
        });
        if (activityDestroyed === consts.DELETE_SUCCESS) {
            return { succes: consts.DELETE_SUCCESS_TEXT + activityId };
        } else {
            return activityDestroyed;
        }
    } catch (error) {
        console.log(error);
    }
};