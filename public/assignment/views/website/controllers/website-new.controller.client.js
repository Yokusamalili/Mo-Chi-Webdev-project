(function () {
    angular
        .module('WebAppMaker')
        .controller('websiteNewController', websiteNewController);

    function websiteNewController($routeParams,
                                  websiteService,
                                  $location) {

        var model = this;
        model.userId = $routeParams['uid'];

        // event handlers
        model.createWebsite = createWebsite;

        function init() {
            model.websites = websiteService.findWebsitesByUser(model.userId);
        }

        init();


        // implementation
        function createWebsite(websiteName, websiteDescription) {
            if (websiteName === null || websiteName === '' || typeof websiteName === 'undefined') {
                model.error = 'Name is required :D';
                return;
            } else {
                if (typeof websiteDescription === 'undefined') {
                    websiteDescription = '';
                }
                var website = {}
                website.name = websiteName;
                website.description = websiteDescription;
                website.developerId = model.userId;
                websiteService.createWebsite(website);
                $location.url('/user/' + model.userId + '/website');
            }
        }
    }
})();