/**
 * Created by moira on 5/29/17.
 */
(function() {
    angular
        .module("WebAppMaker")
        .config(Config);        //configure the module
    function Config($routeProvider) {
        $routeProvider
            .when("/", {
                templateUrl: "home.html"
            })
            .when("/login", {
                templateUrl: "views/user/templates/login.view.client.html",
                controller: "LoginController",
                controllerAs:"model"
            })
            .when("/register", {
                templateUrl: "views/user/templates/register.view.client.html",
                controller:"RegisterController",
                controllerAs: "model"
            })
            .when("/user/:uid", {
                templateUrl: "views/user/templates/profile.view.client.html",
                controller:"ProfileController",
                controllerAs:"model",
                resolve: {
                    loggedin: checkLoggedin
                }
            })

            .when("/user/:uid/database", {
                templateUrl: "views/user/templates/database.html",
                controller:"ProfileController",
                controllerAs:"model",
                resolve: {
                    loggedin: checkLoggedin
                }
            })


            .when("/user/:uid/website", {
                templateUrl: "views/website/templates/website-list.view.client.html",
                controller: "WebsiteListController",
                controllerAs: "model",
                resolve: {
                    loggedin: checkLoggedin
                }
            })
            .when("/user/:uid/website/new", {
                templateUrl: "views/website/templates/website-new.view.client.html",
                controller: "WebsiteNewController",
                controllerAs: "model",
                resolve: {
                    loggedin: checkLoggedin
                }
            })

            .when("/user/:uid/website/:wid", {
                templateUrl: "views/website/templates/website-edit.view.client.html",
                controller: "WebsiteEditController",
                controllerAs: "model",
                resolve: {
                    loggedin: checkLoggedin
                }
            })


            .when("/user/:uid/website/:wid/page", {
                templateUrl: "views/page/templates/page-list.view.client.html",
                controller: "PageListController",
                controllerAs: "model",
                resolve: {
                    loggedin: checkLoggedin
                }
            })



            .when("/user/:uid/website/:wid/page/new", {
                templateUrl: "views/page/templates/page-new.view.client.html",
                controller: "PageNewController",
                controllerAs: "model",
                resolve: {
                    loggedin: checkLoggedin
                }
            })


            .when("/user/:uid/website/:wid/page/:pid", {
                templateUrl: "views/page/templates/page-edit.view.client.html",
                controller: "PageEditController",
                controllerAs: "model",
                resolve: {
                    loggedin: checkLoggedin
                }
            })


            .when("/user/:uid/website/:wid/page/:pid/widget", {
                templateUrl: "views/widget/templates/widget-list.view.client.html",
                controller: "WidgeListController",
                controllerAs: "model",
                resolve: {
                    loggedin: checkLoggedin
                }
            })

            .when("/user/:uid/website/:wid/page/:pid/widget/new", {
                templateUrl: "views/widget/templates/widget-chooser.view.client.html",
                controller: "WidgeChooserController",
                controllerAs: "model",
                resolve: {
                    loggedin: checkLoggedin
                }
            })

            .when("/user/:uid/website/:wid/page/:pid/widget/:wgid", {
                templateUrl: "views/widget/templates/widget-edit.view.client.html",
                controller: "WidgeEditController",
                controllerAs: "model",
                resolve: {
                    loggedin: checkLoggedin
                }
            })

            .when("/user/:uid/website/:wid/page/:pid/widget/:wgid/flicker", {
                templateUrl: 'views/widget/templates/widget-flickr-search.view.client.html',
                controller:'FlickrController',
                controllerAs:"model",
                resolve: {
                    loggedin: checkLoggedin
                }
            })

        function checkLoggedin($q, UserService, $location, $rootScope) {
            var deferred = $q.defer();
            UserService
                .checkLoggedin()
                .then(
                    function (user) {
                        if(user !== '0') {
                            $rootScope.currentUser = user;
                            deferred.resolve();
                        }
                        else {
                            $rootScope.currentUser = null;
                            deferred.reject();
                            $location.url("/login")
                        }
                    }
                );
            return deferred.promise;
        }
    }
})();