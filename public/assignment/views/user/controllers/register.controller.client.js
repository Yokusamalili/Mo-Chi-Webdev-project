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

            if(found == null) {
                var user = {
                    username: username,
                    password: password1
                };
            } else {
                model.error = "Username is unavailable";
                // model.message = user;
                userService
                    .createUser(user)
                    .then(function (user) {
                        $location.url('/user/' + user._id);
                    });
            }
        }
    }
})();