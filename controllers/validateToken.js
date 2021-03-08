const jwt = require("jsonwebtoken");

async function validateTokent(req, res, next) {
    const token = await req.headers["authorization"];

    if (!token) {
        return res.status(401).json({
            auth: false,
            message: "no token provided",
        });
    }

    const decoded = jwt.verify(token, process.env.SECRET_TOKEN);
    const { email, password } = decoded.data;

    req.email = email;
    req.password = password;

    next();
}

module.exports = validateTokent;
