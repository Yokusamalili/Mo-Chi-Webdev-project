/**
 * Created by moira on 5/29/17.
 */
(function() {
    angular
        .module("WebAppMaker")
        .config(Config);        //configure the module
    function Config($routeProvider) {
        $routeProvider
            // .when("/", {
            //     templateUrl: "views/user/templates/login.view.client.html",
            //     controller: "LoginController",
            //     controllerAs:"model"
            //     // templateUrl: "home.html"
            // })
            .when("/home", {
                templateUrl: 'views/restaurant/templates/place-search.html',
                controller: "PlaceSearchController",
                controllerAs: "model"
            })

            .when("/user/search/restaurants/:sid", {
                templateUrl: 'views/restaurant/templates/result-home.client.html',
                controller: "HomeController",
                controllerAs: "model"
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
                controllerAs:"model"
            })

            .when("/user/:uid/database", {
                templateUrl: "views/user/templates/database.html",
                controller:"ProfileController",
                controllerAs:"model"
            })


            .when("/user/:uid/restaurant", {
                templateUrl: "views/restaurant/templates/website-list.view.client.html",
                controller: "RestaurantListController",
                controllerAs: "model"
            })
            .when("/user/:uid/restaurant/new", {
                templateUrl: "views/restaurant/templates/website-new.view.client.html",
                controller: "RestaurantNewController",
                controllerAs: "model"
            })

            .when("/user/:uid/restaurant/:wid", {
                templateUrl: "views/restaurant/templates/rest-inline.view.client.html",
                controller: "RestaurantEditController",
                controllerAs: "model"
            })


            .when("/user/:uid/restaurant/:wid/detail", {
                templateUrl: "views/detail/templates/page-list.view.client.html",
                controller: "DetailListController",
                controllerAs: "model"
            })



            .when("/user/:uid/restaurant/:wid/detail/new", {
                templateUrl: "views/detail/templates/page-new.view.client.html",
                controller: "DetailNewController",
                controllerAs: "model"
            })


            .when("/user/:uid/restaurant/:wid/detail/:pid", {
                templateUrl: "views/detail/templates/page-edit.view.client.html",
                controller: "DetailEditController",
                controllerAs: "model"
            })


            .when("/user/:uid/restaurant/:wid/detail/:pid/widget", {
                templateUrl: "views/widget/templates/widget-list.view.client.html",
                controller: "WidgeListController",
                controllerAs: "model"
            })

            .when("/user/:uid/restaurant/:wid/detail/:pid/widget/new", {
                templateUrl: "views/widget/templates/widget-chooser.view.client.html",
                controller: "WidgeChooserController",
                controllerAs: "model"
            })

            .when("/user/:uid/restaurant/:wid/detail/:pid/widget/:wgid", {
                templateUrl: "views/widget/templates/widget-edit.view.client.html",
                controller: "WidgeEditController",
                controllerAs: "model"
            })

            .when("/user/:uid/restaurant/:wid/detail/:pid/widget/:wgid/flicker", {
                templateUrl: 'views/widget/templates/widget-flickr-search.view.client.html',
                controller:'FlickrController',
                controllerAs:"model"
            })
            .otherwise({
                    redirectTo:"/login"
                }
            );
    }
})();