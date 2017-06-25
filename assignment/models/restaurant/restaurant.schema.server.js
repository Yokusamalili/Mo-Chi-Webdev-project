/**
 * Created by moira on 6/9/17.
 */
module.exports = function () {
    var mongoose = require("mongoose");
    var DetailSchema =require("../detail/detail.schema.server.js")(mongoose);

    var RestaurantSchema = mongoose.Schema({
        _user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        name: String,
        description: String,
        details: [DetailSchema],
    }, {collection: "restaurant"});
    return RestaurantSchema;
}
