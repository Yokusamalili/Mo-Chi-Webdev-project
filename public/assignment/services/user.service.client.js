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


(function() {
    angular
        .module('WebAppMaker')
        .factory('userService', userService);
    function userService() {
        var users = [
            {_id: "123", username: "alice",    password: "alice",    firstName: "Alice",  lastName: "Wonder"  },
            {_id: "234", username: "bob",      password: "bob",      firstName: "Bob",    lastName: "Marley"  },
            {_id: "345", username: "charly",   password: "charly",   firstName: "Charly", lastName: "Garcia"  },
            {_id: "456", username: "jannunzi", password: "jannunzi", firstName: "Jose",   lastName: "Annunzi" },
            {_id: "admin", username: "dd", password: "dd", firstName: "admin",   lastName: "admin"},

        ];
        var api = {
            "createUser"   : createUser,
            "findUserById" : findUserById,
            "findUserByUsername" : findUserByUsername,
            "findUserByCredentials" : findUserByCredentials,
            "updateUser" : updateUser,
            "deleteUser" : deleteUser
    };
        return api;

        function createUser(user) {
            user._id = (new Date()).getTime() + "";
            users.push(user);
        }

        function findUserByUsername(username) {
            var user = users.find(function (user) {
                return user.username === username;
            });
            if(typeof user === 'undefined')
                return null;
            return user;
        }

        function updateUser(userId, user) {
            var oldUser = findUserById(userId);
            user._id = userId;
            users[users.indexOf(oldUser)] = user
        }

        function deleteUser(userId) {
            var user = users.find(function (user) {
                return user._id === userId;
            });
            var index = users.indexOf(user);
            users.splice(index, 1);
        }

        function findUserByCredentials(username, password) {
            for(var u in users) {
                var user = users[u];
                if(user.username === username && user.password === password) {
                    return user;
                }
            }
            return null;
        }

        function findUserById(userId) {
            return users.find(function (user) {
                return user._id === userId;
            });
        }
    }
})();

