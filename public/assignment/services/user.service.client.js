/**
 * Created by moira on 5/28/17.
 */
// Implement the following API in the UserService service
// createUser(user) - adds the user parameter instance to the local users array
// findUserById(userId) - returns the user in local users array whose _id matches the userId parameter
// findUserByUsername(username) - returns the user in local users array whose username matches the parameter username
// findUserByCredentials(username, password) - returns the user whose username and password match the username and password parameters
// updateUser(userId, user) - updates the user in local users array whose _id matches the userId parameter
// deleteUser(userId) - removes the user whose _id matches the userId parameter


(function () {
    angular
        .module('WebAppMaker')
        .factory('userService', userService);


    function userService($http) {

        var api = {
            "createUser": createUser,
            "findUserById": findUserById,
            "findUserByUsername": findUserByUsername,
            "findUserByCredentials": findUserByCredentials,
            "updateUser": updateUser,
            "deleteUser": deleteUser
        };
        return api;

        function createUser(user) {
            var url = "/api/user";
            return $http.post(url, user)
                .then(function (response) {
                    return response.data;
                })
        }

        function findUserByUsername(username) {
            var url = '/api/user?username='+username;
            return $http.get(url);
        }

        function updateUser(userId, user) {
            var url ="/api/user/" + userId;
            $http.put(url, user);
        }

        function deleteUser(userId) {
            var url ="/api/user/" + userId;
            $http.delete(url);
        }

        function findUserByCredentials(username, password) {
            var url = '/api/user?username='+username+'&password='+password;
            return $http.get(url)
                .then(function (response) {
                    return response.data;
                });
        }

        function findUserById(userId) {
            var url = "/api/user/" + userId;
            return $http.get(url);
        }
    }
})();

