/**
 * Created by moira on 6/25/17.
 */
(function () {
    angular
        .module("WebAppMaker")
        .controller("PlaceSearchController", PlaceSearchController);

    function PlaceSearchController(RestaurantService, $location, $rootScope, $routeParams) {
        var vm = this;
        vm.findRestaurantsByCity = findRestaurantsByCity;
        vm.findRestaurantsByNameAndCity = findRestaurantsByNameAndCity;

        function init() {
            vm.findRestaurantsByCity("Cambridge");
        }

        init();

        function findRestaurantsByCity(city) {
            RestaurantService
                .findRestaurantsByCity(city)
                .then(
                    function (response) {
                        var restaurants = response;
                        if (restaurants.length != 0) {
                            vm.restaurants = restaurants.data.restaurants;
                            vm.error = null;
                        }
                        else {
                            vm.error = "Oops! Please try again :(";
                        }
                    },
                    function (err) {
                        vm.error = "Oops! Please try again :(";
                    });
        }

        function findRestaurantsByNameAndCity(rest) {
            RestaurantService
                .findRestaurantsByNameAndCity(rest.name)
                .then(
                    function (response) {
                        var restaurants = response;
                        if (restaurants.length !== 0) {
                            vm.restaurants = restaurants.data.restaurants;
                            $location.url("/user/search/restaurants/"+rest.name);
                            vm.error = null;
                        }
                        else {
                            vm.error = "Oops! Please try again :(";
                        }
                    },
                    function (err) {
                        vm.error = "Oops! Please try again :(";
                    });
        }
    }
})();