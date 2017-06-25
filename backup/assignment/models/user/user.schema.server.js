/**
 * Created by moira on 6/9/17.
 */
module.exports = function () {
    var mongoose = require("mongoose");
    var WebsiteSchema = require("../restaurant/restaurant.schema.server.js")(mongoose);
    var UserSchema = mongoose.Schema({
        username: String,
        password: String,
        firstname: String,
        lastname: String,
        email: String,
        websites: [WebsiteSchema],
    }, {collection: "user"});
    return UserSchema;
}
