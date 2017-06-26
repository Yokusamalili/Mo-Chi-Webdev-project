module.exports = function () {
    var mongoose = require ('mongoose');
    var waitingSchema = mongoose.Schema({
        restaurantId: String,
        userId: String,
        description: String,
        dateCreated: {type: Date, default: Date.now}
    }, {collection: 'MongooseWebAppProject.blog'});

    return waitingSchema;
};