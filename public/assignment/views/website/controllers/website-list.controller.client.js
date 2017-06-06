(function () {
    angular
        .module('WebAppMaker')
        .controller('websiteListController', websiteListController);
    
    function websiteListController($routeParams, websiteService) {

        var model = this;
        model.userId = $routeParams['uid'];

        function init() {
            websiteService
                .findAllWebsitesForUser(model.userId)
                .then(success, errorHandle);
                function success (webs) {
                    if(webs !== '[]') {
                        model.websites = webs;
                    }
                }
                function errorHandle() {
                    model.message="Name is required :D"
                }
        }
        init();
    }
})();