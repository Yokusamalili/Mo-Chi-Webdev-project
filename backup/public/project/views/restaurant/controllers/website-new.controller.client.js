/**
 * Created by moira on 5/28/17.
 */
(function () {
    angular
        .module("WebAppMaker")
        .controller("RestaurantNewController", RestaurantNewController);

    function RestaurantNewController($routeParams, RestaurantService, $location) {
        var vm = this;
        //why wid
        var restaurantId = parseInt($routeParams.wid);
        vm.userId = $routeParams.uid;

        vm.createRestaurant = createRestaurant;


        function init() {

            var promise = RestaurantService.findRestaurantById(restaurantId);
            promise
                .success(function (newrestaurant) {
                    if(newrestaurant != '0') {
                        vm.restaurant = newrestaurant;
                    }
                })
                .error(function () {

                });


            RestaurantService.findRestaurantsForUser(vm.userId)
                .success(function (webs) {
                    console.log(webs);
                    if(webs != '[]') {
                        vm.restaurants = webs;
                    }
                })
                .error(function () {
                });
        }
        init();

        function createRestaurant(restaurant) {
            restaurant.uid = vm.userId;
            RestaurantService
            .createRestaurant(restaurant)
                .success(function (restaurant) {
                    $location.url("/user/"+ vm.userId +"/restaurant");

                })
                .error(function () {

                })
        }

    }
})();