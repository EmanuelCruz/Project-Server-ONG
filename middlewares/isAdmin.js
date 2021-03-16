const middlewares = {

  isAdmin = (req, res, next, user) => {
    if (user.roleId === 1) return next();
    res.redirect('/')
  }
}

module.exports = middlewares;