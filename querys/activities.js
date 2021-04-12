const db = require("../models");
const Activities = db.Activities;

exports.createActivities = async (activity) => {
  return (activity = await Activities.create(activity));
};

exports.updateActivity = async (actitivy, activityId) => {
  try {
    await Activities.update(actitivy, {
      where: { id: activityId },
    });
    actitivy = await Activities.findAll({
      where: { id: activityId },
    });
    return actitivy;
  } catch (error) {
    return error;
  }
};

exports.getActivities = () => {
  return Activities.findAll();
};

exports.getActivity = (activityId) => {
  return Activities.findOne({ where: { id: activityId } });
};

exports.deleteOneActivity = async (activityId) => {
  try {
    let activityDeleted = await Activities.destroy({
      where: { id: activityId },
    });

    return activityDeleted;
  } catch (error) {
    return error;
  }
};
