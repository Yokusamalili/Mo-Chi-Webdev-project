module.exports = function (app) {
    //
    var connectionString = 'mongodb://localhost/chi-mo-webdev';
    connectionString = 'mongodb://yokusamalili:cinderella99@ds143141.mlab.com:43141/heroku_ld867kn4';
    if(process.env.MLAB_USERNAME_WEBDEV) { // check if running remotely
        var username = process.env.MLAB_USERNAME_WEBDEV; // get from environment
        var password = process.env.MLAB_PASSWORD_WEBDEV;
        connectionString = 'mongodb://' + username + ':' + password;
        connectionString += '@ds143141.mlab.com:43141/heroku_ld867kn4'; // user yours
    }
    // var mongoose = require('mongoose');
    // mongoose.connect(connectionString);

    var mongoose = require("mongoose");
    mongoose.connect(connectionString);
    var q = require('q');
    mongoose.Promise = q.Promise;

    var model = require('./model/models.server.js')();
    require("./services/user.service.server")(app, model);
    require("./services/review.service.server")(app, model);
    require("./services/blog.service.server")(app, model);
}
