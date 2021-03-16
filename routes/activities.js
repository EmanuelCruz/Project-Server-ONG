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

module.exports = router;
