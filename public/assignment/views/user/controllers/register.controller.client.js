(function () {
    angular
        .module('WebAppMaker')
        .controller('registerController', registerController);
    
    function registerController($location, userService) {

        var model = this;

        // event handlers
        model.register = register;

        // implementation
        function register(username, password1, password2) {

            if(password1 !== password2) {
                model.error = "Passwords don't match";
                return;
            }

            var found = userService.findUserByUsername(username);

            if(found !== null) {
                model.error = "Username is unavailable";
            } else {
                var user = {
                    username: username,
                    password: password1
                };
                // model.message = user;
                userService.createUser(user);
                $location.url('/user/' + user._id);
            }
        }
    }
})();