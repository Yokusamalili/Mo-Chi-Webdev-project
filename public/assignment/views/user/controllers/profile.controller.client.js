(function () {
    angular
        .module('WebAppMaker')
        .controller('profileController', profileController);

    function profileController($location, $routeParams, userService) {
        var model = this;
        model.userId = $routeParams['uid'];
        model.user = userService.findUserById(model.userId);
        model.updateUser = updateUser;

        function updateUser(username,password1,password2,firstName,lastName,email){
            if(username === null || username === '' || typeof username === 'undefined') {
                model.error = 'Username is required.';
                return;
            }

            if(password1 !== password2 || password1 === null || typeof password1 === 'undefined') {
                model.error = "Passwords don't match.";
                return;
            }

            var found = userService.findUserByUsername(username);

            if(found !== null && found._id != model.userId) {
                model.error = "Username unavailable :(";
            } else {
                var newUser = {
                    username: username,
                    password: password,
                    firstName: firstName,
                    lastName: lastName,
                };
                userService.updateUser(model.userId,newUser);
                $location.url('/user/' + newUser._id);

            }
            userEmail = email;
        }
    }

})();