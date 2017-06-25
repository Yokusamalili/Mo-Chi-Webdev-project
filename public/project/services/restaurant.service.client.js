/**
 * Created by moira on 6/9/17.
 */


(function(){
    angular
        .module("WebAppMaker")
        .factory("RestaurantService", RestaurantService);

    function RestaurantService($http) {
        var searchURL =  "https://opentable.herokuapp.com/api/restaurants?city=&page=&name=&zip=&per_page=20";

        var api = {
            findRestaurantsForUser: findRestaurantsForUser,
            findRestaurantById: findRestaurantById,
            createRestaurant: createRestaurant,
            updateRestaurant:updateRestaurant,
            removeRestaurant:removeRestaurant,
            findRestaurantsByCity : findRestaurantsByCity,
            findRestaurantsByNameAndCity : findRestaurantsByNameAndCity
        };
        return api;

        function findRestaurantsByCity(city) {
            var url = searchURL
                .replace("city=", "city="+city);
            return $http.get(url);
        }

        function findRestaurantsByNameAndCity(name) {
            var url = searchURL
                .replace("name=", "name="+name);
            return $http.get(url);
        }

        function createRestaurant(restaurant) {
            var newWeb = {
                name:restaurant.name,
                uid:restaurant.uid
            }
            return $http.post('/api/user/'+ newWeb.uid + '/restaurant', newWeb);
        }

        function findRestaurantById(wid) {
            var url = '/api/restaurant/'+wid;
            return $http.get(url);
        }

        function findRestaurantsForUser(uid) {
            console.log("----------------FindRestaurantForUser----------------------");
            var url = '/api/user/'+uid+'/restaurant';
            return $http.get(url);
        }


        //default restaurant list
        function getRestList(){
            console.log("-----------------rest list-----------------------------------");
            var url = '/api/user/'+000+'/restaurant';
            return $http.get(url);
        }


        function removeRestaurant(wid) {
            var url ="/api/restaurant/" + wid;
            $http.delete(url);
        }
        
        function updateRestaurant(restaurant) {
            var url ="/api/restaurant/"+ restaurant._id;
            $http.put(url, restaurant);
        }

    }
})();