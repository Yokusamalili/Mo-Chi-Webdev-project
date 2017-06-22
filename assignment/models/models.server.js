// Created by moira on 6/9/17.

module.exports = function() {

    var connectionString = 'mongodb://localhost/chi-mo-webdev';
    if(process.env.MLAB_USERNAME_WEBDEV) { // check if running remotely
        var username = process.env.MLAB_USERNAME_WEBDEV; // get from environment
        var password = process.env.MLAB_PASSWORD_WEBDEV;
        connectionString = 'mongodb://' + username + ':' + password;
        connectionString += '@ds143141.mlab.com:43141/heroku_ld867kn4'; // user yours
    }
    var mongoose = require('mongoose');
    mongoose.connect(connectionString);


    var userModel = require("./user/user.model.server.js")();
    var websiteModel = require("./website/website.model.server.js")();
    var pageModel = require("./page/page.model.server.js")();
    var widgetModel = require("./widget/widget.model.server.js")();


    var model = {
        userModel: userModel,
        websiteModel:websiteModel,
        pageModel:pageModel,
        widgetModel:widgetModel
    };

    return model;
};