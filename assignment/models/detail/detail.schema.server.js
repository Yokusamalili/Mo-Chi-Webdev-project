/**
 * Created by moira on 6/9/17.
 */

module.exports = function(){
    var mongoose = require("mongoose");
    var widgetSchema = require("../widget/widget.schema.server.js")(mongoose);

    var DetailSchema = mongoose.Schema({
        _restaurant: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Restaurant'
        },
        name: String,
        title: String,
        description: String,
        widgets: [widgetSchema],
    }, {collection: "detail"});

    return DetailSchema;
};