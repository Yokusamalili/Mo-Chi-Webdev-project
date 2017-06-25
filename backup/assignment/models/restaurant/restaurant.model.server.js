/**
 * Created by moira on 6/9/17.
 */
module.exports = function() {
    var mongoose = require("mongoose");
    var RestaurantSchema = require("./restaurant.schema.server")();
    var RestaurantModel = mongoose.model("RestaurantModel", RestaurantSchema);

    var api = {
        createRestaurantForUser: createRestaurantForUser,
        findRestaurantsForUser:findRestaurantsForUser,
        deleteRestaurant:deleteRestaurant,
        findRestaurantById:findRestaurantById,
        updateRestaurant:updateRestaurant
    };
    return api;


    function updateRestaurant(restaurantId,restaurant) {
        // console.log("----------------updateRestaurant------------------")
        return RestaurantModel
            .update(
                {
                    _id: restaurantId
                },
                {
                    name: restaurant.name,
                    description: restaurant.description
                }
            );
    }

    function findRestaurantById(restaurantId) {
        // console.log("----------------FindRestaurantById------------------")
        return RestaurantModel
            .findById(restaurantId);
    }

    function deleteRestaurant(restaurantId) {
        // console.log("----------------deleteRestaurant------------------")
        return RestaurantModel
            .remove({
                _id:restaurantId
            })
    };

    function findRestaurantsForUser(userId) {
        // console.log("----------------findRestaurantsForUser------------------")
        return RestaurantModel
            .find({
                _user: userId
            });
    }

    function createRestaurantForUser(userId,restaurant) {
        // console.log("----------------createRestaurantForUser------------------")
        restaurant["_user"] = userId;
        return RestaurantModel.create(restaurant);
    }
};
