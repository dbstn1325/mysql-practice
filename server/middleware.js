export const localsMiddleware = (req, res, next) => {
    res.locals.siteName = "MYSQL",
    res.locals.loggedIn = req.session.loggedIn;
    res.locals.user = req.session.user || {};
    // console.log(res.locals);
    next();
}