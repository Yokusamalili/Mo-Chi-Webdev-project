/**
 * Created by moira on 5/28/17.
 */

(function () {
    angular
        .module("WebAppMaker")
        .controller("RegisterController", RegisterController);

    function RegisterController($location, UserService) {
        var vm = this;
        vm.createUser = createUser;

        function createUser(user) {
            if(user.password !== user.password2 || !user.password || !user.password2) {
                vm.error = "Your passwords don't match";
                return;
            }
            else {
                UserService
                    .register(user.username, user.password)
                    .success(function (user) {
                        console.log(user);
                        $location.url("/user/" + user._id);
                    })
                    .error(function (err) {
                        vm.error = err;
                    })
            }
        }
    }
})();