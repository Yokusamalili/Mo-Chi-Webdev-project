(function () {
    angular
        .module("WebAppMaker")
        .controller("loginController", loginController);

    function loginController($location, userService) {
        var model = this;
        model.login = login;

        function login(username, password) {

            // var user = userService.findUserByCredentials(username, password);
            userService
                .findUserByCredentials(username, password)
                .then(login, handleError);

            function handleError(error) {
                model.message = "Username " + username + " not found, please try again";
            }

            function login(user) {
                if (user !== null) {
                    model.message = "Welcome " + username;
                    $location.url('/user/' + user._id);
                } else {
                    model.message = "Username " + username + " not found, please try again";
                }
            }
        }
    }
})();

