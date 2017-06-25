(function () {
    angular
        .module("WebAppMaker")
        .controller("RestaurantEditController", RestaurantEditController);

    function RestaurantEditController($routeParams, RestaurantService,$location) {
        var vm = this;
        var restaurantId = $routeParams.wid;
        vm.userId = $routeParams.uid;
        vm.updateRestaurant = updateRestaurant;
        vm.removeRestaurant = removeRestaurant;
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
                    if(webs != '[]') {
                        vm.restaurants = webs;
                    }
                })
                .error(function () {
                });
        }
        init();





        function updateRestaurant() {
            RestaurantService.updateRestaurant(vm.restaurant);
            $location.url("/user/"+ vm.userId +"/restaurant");

        }


        function removeRestaurant(currentWebId) {
            RestaurantService.removeRestaurant(currentWebId);
            $location.url("/user/"+ vm.userId +"/restaurant");
        }

        
    }
})();