const db = require("../models");
const Activities = db.Activities;
const consts = require("../constant/const");

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
<<<<<<< HEAD
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
=======
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
>>>>>>> ae9ab52b41b85cfdc3d022ccba11b17ea997246c
