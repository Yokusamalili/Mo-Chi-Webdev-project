(function () {
    angular
        .module('WebAppMaker')
        .controller('profileController', profileController);

    function profileController($location, $routeParams, userService) {
        var model = this;
        var userId = $routeParams['uid'];

        model.userId = userId;
        // model.user = userService.findUserById(userId);
        model.updateUser = updateUser;
        model.deleteUser = deleteUser;

        function init() {
           userService
                .findUserById(userId)
                .then (function (newuser){
                    if(newuser != '0') {
                        model.user = newuser;
                    }
                })
        }
        init();

        function deleteUser(user) {
            userService
                .deleteUser(user._id)
                .then(function () {
                    $location.url('/login');
                });
            init();
        }

        function updateUser(user) {
            userService
                .updateUser(user._id, user)
                .then(function () {
                    model.message = "User updated successfully";
                });
        }
    }
})();