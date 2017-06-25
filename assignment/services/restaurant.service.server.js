/**
 * Created by moira on 6/2/17.
 */

module.exports = function (app, model) {

    app.get('/api/rest/allwebs', allWebs);
    app.post('/api/user/:userId/restaurant',createRestaurant);
    app.get('/api/user/:userId/restaurant', findRestaurantsForUser);
    app.get('/api/restaurant/:restaurantId', findRestaurantById);
    app.put('/api/restaurant/:restaurantId', updateRestaurant);
    app.delete('/api/restaurant/:restaurantId', removeRestaurant);



    function createRestaurant(req, res) {
        var restaurant = req.body;
        console.log(restaurant);
        var uid = req.params.userId;
        console.log(req.params.userId);
        model
            .restaurantModel
            .createRestaurantForUser(uid, restaurant)
            .then(
                function (newRestaurant) {
                console.log(newRestaurant);
                res.json(newRestaurant);
            })
    }


    function removeRestaurant(req, res) {
        var wid = req.params.restaurantId;
        model
            .restaurantModel
            .deleteRestaurant(wid)
            .then(
                function (status) {
                    res.sendStatus(200);
                },
                function (error) {
                    res.sendStatus(400).send(error);
                }
            )
    }



    function updateRestaurant(req, res) {
        var restaurant = req.body;
        var wid = req.params.restaurantId;
        model
            .restaurantModel
            .updateRestaurant(wid, restaurant)
            .then(
                function(status){
                    res.sendStatus(200);
                },
                function(error){
                    res.sendStatus(400).send(error);
                }
            );
    }

    function findRestaurantById(req,res) {
        var wid = req.params.restaurantId;
        model
            .restaurantModel
            .findRestaurantById(wid)
            .then(
                function(restaurant){
                    if(restaurant){
                        res.send(restaurant);
                    }
                    else{
                        res.send('0');
                    }
                },
                function(error){
                    res.sendStatus(400).send(error);
                }
            );

    }


    function findRestaurantsForUser(req, res) {
        model
            .restaurantModel
            .findRestaurantsForUser(req.params.userId)
            .then(
                function (restaurants) {
                    if(restaurants){
                        res.json(restaurants);
                    }
                    else{
                        res.send('0');
                    }
                },
                function(error){
                    res.sendStatus(400).send(error);
                }
            );

    }

    //testing purpose
    function allWebs(req, res) {
        res.send(restaurants);

    }
}