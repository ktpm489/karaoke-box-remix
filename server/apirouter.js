const Authentication = require('./controllers/authenticationController');
const passportService = require('./services/passport');
const passport = require('passport');

// configure session false since we're not using cookies
const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignin = passport.authenticate('local', { session: false });

console.log('passportservice', passportService)


module.exports = function (app) {
  app.get('/api/protect', requireAuth, function(req, res) {
    res.send({ message: 'this is a protected route' });
  });
  app.post('/api/login', requireSignin, Authentication.login);
  app.post('/api/signup', Authentication.signup);
};
