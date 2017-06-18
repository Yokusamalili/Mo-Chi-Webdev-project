/**
 * Created by moira on 5/28/17.
 */
(function () {
    angular
        .module("WebAppMaker")
        .controller("ProfileController", ProfileController);
    function ProfileController($routeParams, UserService) {
        var vm = this;
        var userId = $routeParams.uid;
        vm.updateUser = updateUser;
        vm.deleteUser = deleteUser;
        vm.logout = logout;

        function init() {
            UserService.findUserById(userId)
                .then(function (response) {
                    console.log(response);
                    console.log(response.data);
                    vm.user=response.data;
                })

            //return all users for the database page
            UserService.allUsers()
                .success(function (newusers) {
                    if(newusers != '[]') {
                        vm.users = newusers;
                    }
                })
                .error(function () {

                });


        }
        init();




        function deleteUser(currentUserId) {
            console.log(currentUserId);
            UserService.deleteUser(currentUserId);
            init();
        }


        function updateUser() {
            UserService.updateUser(vm.user);

        }


        function logout() {
            UserService
                .logout()
                .success(function () {
                    $location.url("/");
                })
        }

    }
})();