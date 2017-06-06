(function () {
    angular
        .module('WebAppMaker')
        .controller('websiteEditController', websiteEditController);

    function websiteEditController($routeParams,
                                   websiteService,
                                   $location) {

        var model = this;
        var websiteId = $routeParams.websiteId;

        model.userId = $routeParams['uid'];
        model.websiteId = $routeParams.websiteId;
        model.website = websiteService.findWebsiteById(model.websiteId);

        // event handlers
        model.updateWebsite = updateWebsite;
        model.deleteWebsite = deleteWebsite;

        function init() {
            websiteService
                .findWebsiteById(websiteId)
                .then(sucById, errorHandle1);

            function sucById(newwebsite) {
                if (newwebsite !== '0') {
                    model.website = newwebsite;
                }
            }
            function errorHandle1() {
                model.message = "Name is required :D"
            }

            websiteService
                .findAllWebsitesForUser(model.userId)
                .then(sucForUser,errHandle);

                function sucForUser (webs) {
                    if (webs != '[]') {
                        model.websites = webs;
                    }
                }
                function errHandle () {
                    model.message = "Name is required :D"
                }
        }

        init();

        // implementation
        function updateWebsite() {
            websiteService.updateWebsite(model.website);
            $location.url("/user/" + model.userId + "/website");

        }

        function deleteWebsite(websiteId) {
            websiteService.removeWebsite(websiteId);
            $location.url("/user/" + model.userId + "/website");
        }
    }
})();
