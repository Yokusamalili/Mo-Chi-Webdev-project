/**
 * Created by moira on 5/28/17.
 */
(function () {
    angular
        .module("WebAppMaker")
        .controller("LoginController", LoginController);

    function LoginController($location, UserService) {
        var vm = this;
        vm.login = login;

        function login(username, password) {
            UserService
                .login(username, password)
                .then(function (user) {
                    if (user === '0') {
                        vm.error = "User Not Found";
                    }
                    else {
                        $location.url("/user/" + user._id);
                    }
                }
                    (function (user) {
                        console.log("error from login");
                    }))
        }
    }
})();