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
    function websiteService() {
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
            "findWebsitesByUser" : findWebsitesByUser,
            "findWebsiteById" : findWebsiteById,
            "updateWebsite" : updateWebsite,
            "deleteWebsite" : deleteWebsite

    };
        return api;
        function createWebsite(website) {
            website._id = (new Date()).getTime() + "";
            website.created = new Date();
            website.updated = new Date();
            website.name = website.name;
            website.description = website.description;
            websites.push(website);
        }

        function updateWebsite(websiteId, website) {
            var oldWeb = findWebsiteById(websiteId);
            website._id = websiteId;
            users[users.indexOf(oldWeb)] = website
        }

        function deleteWebsite(websiteId) {
            var website = websites.find(function (website) {
                return website._id === websiteId;
            });
            var index = websites.indexOf(website);
            websites.splice(index, 1);
        }

        function findWebsiteById(websiteId) {
            return websites.find(function (website) {
                return website._id === websiteId;
            });
        }

        function findWebsitesByUser(userId) {
            var resultSet = [];
            for(var w in websites) {
                if(websites[w].developerId === userId) {
                    // websites[w].created = new Date();
                    // websites[w].updated = new Date();
                    resultSet.push(websites[w]);
                }
            }
            return resultSet;
        }
    }
})();

