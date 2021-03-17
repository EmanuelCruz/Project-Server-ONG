const userQuery = require("../querys/users");
const bcrypt = require("bcrypt");
let consts = require("../constant/const");

exports.register = (req, res) => {
    const password = bcrypt.hashSync(req.body.password, consts.SALT_ROUNDS);

    userQuery.createUser(
        req.body.firstName, req.body.lastName, req.body.email, password)
    .then((newUser) => {
        res.status(consts.code_success).send(newUser);
    }).catch(err => res.status(consts.code_failure).send({message: err.message}));
};