/**
 * Created by moira on 5/28/17.
 */

// createWebsite(userId, website) - adds the website parameter instance to the local websites array. The new website's developerId is set to the userId parameter
// findWebsitesByUser(userId) - retrieves the websites in local websites array whose developerId matches the parameter userId
// findWebsiteById(websiteId) - retrieves the website in local websites array whose _id matches the websiteId parameter
// updateWebsite(websiteId, website) - updates the website in local websites array whose _id matches the websiteId parameter
// deleteWebsite(websiteId) - removes the website from local websites array whose _id matches the websiteId parameter
//


(function() {
    angular
        .module("WebAppMaker")
        .factory("websiteService", websiteService);

    function websiteService($http) {
        var websites = [
            { "_id": "123", "name": "Facebook",    "developerId": "456", "description": "Lorem" },
            { "_id": "234", "name": "Tweeter",     "developerId": "456", "description": "Lorem" },
            { "_id": "456", "name": "Gizmodo",     "developerId": "456", "description": "Lorem" },
            { "_id": "890", "name": "Go",          "developerId": "123", "description": "Lorem" },
            { "_id": "567", "name": "Tic Tac Toe", "developerId": "123", "description": "Lorem" },
            { "_id": "678", "name": "Checkers",    "developerId": "123", "description": "Lorem" },
            { "_id": "789", "name": "Chess",       "developerId": "234", "description": "Lorem" },
            { "_id": "admin","name":"Boston Sports","developerId": "admin", "description": "Boston Sprots' Teams"}
        ];
        var api = {
            "createWebsite"   : createWebsite,
            "findAllWebsitesForUser" : findAllWebsitesForUser,
            "findWebsiteById" : findWebsiteById,
            "updateWebsite" : updateWebsite,
            "deleteWebsite" : deleteWebsite

    };
        return api;


        function createWebsite(website) {
            var newWeb = {
                name:website.name,
                uid:website.uid
            }
            return $http.post('/api/user/newweb.uid/website', newWeb);
        }

        function updateWebsite(websiteId, website) {
            var url ="/api/website/"+ websiteId;
            $http.put(url, website);
        }

        function deleteWebsite(websiteId) {
            var url ="/api/website/" + websiteId;
            $http.delete(url);
        }

        function findWebsiteById(websiteId) {
            var url = '/api/website/'+ websiteId;
            return $http.get(url);
        }

        function findAllWebsitesForUser(userId) {
            var url = "/api/assignment/user/"+userId+"/website";
            return $http.get(url)
                .then(function (response) {
                    return response.data;
                });
        }
    }
})();

