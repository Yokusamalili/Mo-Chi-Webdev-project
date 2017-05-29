
(function () {
    angular
        .module('WebAppMaker')
        .controller('websiteEditController', websiteEditController);
    
    function websiteEditController($routeParams,
                                  websiteService,
                                  $location) {

        var model = this;
        model.userId = $routeParams['uid'];
        model.websiteId = $routeParams.websiteId;
        model.website = websiteService.findWebsiteById(model.websiteId);

        // event handlers
        model.createWebsite = createWebsite;
        model.updateWebsite = updateWebsite;
        model.deleteWebsite = deleteWebsite;

        function init() {
            model.websites = websiteService.findWebsitesByUser(model.userId);
            model.website = websiteService.findWebsiteById(model.websiteId);
        }
        init();

        // implementation
        function createWebsite(website) {
            website.developerId = model.userId;
            websiteService.createWebsite(website);
            $location.url('/user/'+model.userId+'/website');
        }

        function updateWebsite(websiteName, websiteDescription){

            if(websiteName === null || websiteName === '' || typeof websiteName === 'undefined') {
                model.error = 'Name is required :D';
                return;
            } else {
                if (typeof websiteDescription === 'undefined'){
                    websiteDescription = '';
                }
                var website = {}
                website.name = websiteName;
                website.description = websiteDescription;
                website.developerId = model.userId;
                websiteService.updateWebsite(model.websiteId,website);
                $location.url('/user/' + model.userId + '/website');
            }

        }

        function deleteWebsite(websiteId) {
            websiteService.deleteWebsite(websiteId);
            $location.url('/user/'+model.userId+'/website');
        }
    }
})();
