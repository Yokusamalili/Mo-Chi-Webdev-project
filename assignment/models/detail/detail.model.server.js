/**
 * Created by moira on 6/9/17.
 */
module.exports = function() {
    var mongoose = require("mongoose");
    var DetailSchema = require("./detail.schema.server")();
    var DetailModel = mongoose.model("DetailModel", DetailSchema);

    var api = {
        findAllDetailsForRestaurant: findAllDetailsForRestaurant,
        createDetail:createDetail,
        findDetailById:findDetailById,
        updateDetail:updateDetail,
        deleteDetail:deleteDetail
    };
    return api;

    function deleteDetail(detailId) {
        // console.log("----------------deleteDetail---------------------")
        return DetailModel
            .remove({
                _id: detailId
            })
    }

    function updateDetail(detailId, detail) {
        // console.log("----------------updateDetail---------------------")
        return DetailModel
            .update(
                {
                    _id: detailId
                },
                {
                    name: detail.name,
                    title: detail.title,
                    description: detail.description
                }
            );
    }

    function findDetailById(detailId) {
        // console.log("----------------findDetailById---------------------")
        return DetailModel
            .findById(detailId);
    }


    function findAllDetailsForRestaurant(restaurantId){
        // console.log("----------------findAllDetailsForRestaurant---------------------")
        return DetailModel
            .find({
                _restaurant: restaurantId
            });
    }

    function createDetail(restaurantId, detail){
        // console.log("----------------createDetail---------------------")
        detail["_restaurant"] = restaurantId;
        return DetailModel.create(detail);
    }

}