// request variable
var request = require('request');

// Export a function, so that we can pass
module.exports = function(app, ejs, cfs) {

    // load the login page 
    app.get('/', function(req, res) {

    	// login page
        res.render('pages/login', {'config' : cfs, 'module': 'login'});
    });

    // load the dashboard page 
    app.get('/dashboard', function(req, res) {

        // main dashboard
        res.render('pages/dashboard', {'config' : cfs, 'module': 'dashboard'});
    });

    // load the activities page 
    app.get('/activities', function(req, res) {

		request(cfs.main_url + 'api/activities', function (error, response, body) {
		    if (!error && response.statusCode == 200) {
		        // activities
        		res.render('pages/activities', {'config' : cfs, 'module': 'activities', 'activities' : JSON.parse(body)});
		     }
		})
    });

    // load the users page 
    app.get('/users', function(req, res) {

        // users
        res.render('pages/users', {'config' : cfs, 'module': 'users'});

    });

    // load the journals page 
    app.get('/journals', function(req, res) {

        // journals
        res.render('pages/journals', {'config' : cfs, 'module': 'journals'});

    });

    // load the 404 page 
    app.get('/(*)', function(req, res) {

        // 404
        res.render('pages/404', {'config' : cfs, 'module': 'error'});

    });
};
 