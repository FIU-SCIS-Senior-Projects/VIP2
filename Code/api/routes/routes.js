module.exports = function(app, passport) {

    app.get('/auth/google', passport.authenticate('google', {scope : ['profile', 'email'] }));

    app.get('/auth/google/callback',
                passport.authenticate('google', {
                    successRedirect : 'http://localhost:3000/#/graduate-application',
                    failureRedirect : 'http://localhost:3000/#/how-vip-credits-count'
                }));
};