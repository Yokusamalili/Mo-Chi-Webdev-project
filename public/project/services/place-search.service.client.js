/**
 * Created by moira on 6/25/17.
 */
(function(){
    angular
        .module("WebAppMaker")
        .factory("YelpService", YelpService);

    var key = "IVT2UUSoqIV1QSMXJCp7oA";
    var secret = "KwzCCwmDebpyiVk7mp5yKKCBCcjJT4EvHvgFbFYaHAvdqKXUzsGwQFPPD4RtJZnh";

    function YelpService($http){
        var service = {
            searchPhotos : searchPhotos
        };

        return service;

        function searchPhotos(searchText){
            var url = urlBase
                .replace("API_KEY", key)
                .replace("TEXT", searchText);
            console.log("start");
            console.log(url);
            console.log("end");

            return $http.get(url);
        }
    }


})();