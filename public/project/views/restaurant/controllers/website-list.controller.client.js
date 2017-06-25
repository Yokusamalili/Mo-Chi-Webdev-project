(function(){
    angular
        .module("WebAppMaker")
        .controller("RestaurantListController", RestaurantListController);

    function RestaurantListController($routeParams, RestaurantService) {
        var vm = this;

        vm.userId = $routeParams.uid;


        function init() {
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
    }
})();