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

        function login (username,password) {
           UserService
               .findUserByCredentials(username, password)
               .success(function (user) {
                    if(user === '0')
                    {
                        vm.error = "User Not Found";
                    }
                    else {
                        $location.url("/user/" + user._id);
                    }
                })
                .error(function (user) {
                    console.log("error from login");
                });


        }
    }
})();