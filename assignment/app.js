/**
 * Created by moira on 6/2/17.
 */

// create a node vendor module
module.exports = function (app) {
    var model = require("./models/models.server")();
    require("./services/user.service.server.js")(app, model);
    require("./services/restaurant.service.server.js")(app, model);
    require("./services/detail.service.server.js")(app, model);
    require("./services/widget.service.server")(app, model);

};