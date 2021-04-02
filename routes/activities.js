const express = require("express");
const router = express.Router();
const activitiesController = require("../controllers/activities");
const consts = require("../constant/const");

/* Creation of activities. */
router.post(
    consts.URL_POST_ACTIVITIES,
    activitiesController.activitiesValidationRules(),
    activitiesController.validate,
    activitiesController.postActivities
);

router.put(
    consts.URL_PUT_ACTIVITIES,
    activitiesController.activitiesValidationRules(),
    activitiesController.validate,
    activitiesController.updateActivity
);

router.get(
    consts.URL_GET_ACTIVITIES,
    activitiesController.getActivities
);

router.get(
    consts.URL_GET_BY_ID_ACTIVITIES,
    activitiesController.getActivity
);

module.exports = router;
