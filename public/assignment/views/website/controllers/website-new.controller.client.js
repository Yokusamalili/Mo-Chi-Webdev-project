(function () {
    angular
        .module('WebAppMaker')
        .controller('websiteNewController', websiteNewController);

    function websiteNewController($routeParams,
                                  websiteService,
                                  $location) {

        var model = this;
        var websiteId = $routeParams.websiteId;
        model.userId = $routeParams['uid'];


        // event handlers
        model.createWebsite = createWebsite;

        function init() {
            websiteService
                .findWebsiteById(websiteId)
                .then(success1);

            function success1(newwebsite) {
                if (newwebsite !== '0') {
                    model.website = newwebsite;
                }
            }

            websiteService
                .findAllWebsitesForUser(model.userId)
                .then(success);


            function success(webs) {
                if (webs !== '[]') {
                    model.websites = webs;
                }
            }
        }

        init();


        // implementation
        function createWebsite(website) {
            // website.developerId = model.userId;
            websiteService
                .createWebsite(website)
                .then(sucCreate, errHandle);

            function sucCreate(website) {
                $location.url("/user/" + model.userId + "/website");
            }

            function errHandle() {
                model.message = "Name is required :D"
            }
        }
    }
})();