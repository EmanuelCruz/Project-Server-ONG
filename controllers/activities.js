const { body, validationResult } = require("express-validator");
const activitiesQuery = require("../querys/activities");
const consts = require("../constant/const");

const activitiesValidationRules = () => {
    return [body("name").notEmpty(), body("content").notEmpty()];
};

const validate = (req, res, next) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
        return next();
    }
    const extractedErrors = [];
    errors.array().map((err) => extractedErrors.push({ [err.param]: err.msg }));

    return res.status(422).json({
        errors: extractedErrors,
    });
};

const postActivities = (req, res, next) => {
    const name = req.body.name;
    const content = req.body.content;
    activitiesQuery
        .createActivities(name, content)
        .then((activity) => {
            res.status(consts.POST_SUCCESS).send(activity);
        })
        .catch((err) =>
            res.status(consts.POST_FAILURE).send({ message: err.message })
        );
};

const updateActivity = (req, res, next) => {
    const body = req.body;
    const activityId = req.params.id;
    activitiesQuery.updateActivity(activityId, body.name, body.content)
        .then(result => {
            if (result[1]) {
                activitiesQuery.getActivity(activityId).then(activity => {
                    res.status(consts.code_success).send(activity);
                }).catch(err => res.status(consts.code_failure).send({message: err.message}));
            } else {
                res.status(consts.code_failure).send(consts.NOT_FOUND_ACTIVITY);
            }
        }).catch(err => res.status(consts.code_failure).send({message: err.message}));
};

const getActivities = (req,res,next) => {
    activitiesQuery
        .getActivities()
        .then((activities) => {
            res.status(consts.code_success).send(activities);
        })
        .catch((err) =>
            res.status(consts.code_failure).send({ message: err.message })
        );
}

const getActivity = (req,res,next) => {
    const activityId = req.params.id;
    activitiesQuery
    .getActivity(activityId)
    .then((activity) => {
        res.status(consts.code_success).send(activity);
    })
    .catch((err) =>
        res.status(consts.code_failure).send({ message: err.message })
    );
}

module.exports = {
    activitiesValidationRules,
    validate,
    postActivities,
    updateActivity,
    getActivities,
    getActivity
};
