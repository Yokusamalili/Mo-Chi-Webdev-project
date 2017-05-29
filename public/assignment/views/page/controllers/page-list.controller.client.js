/**
 * Created by moira on 5/28/17.
 */
(function () {
    angular
        .module('WebAppMaker')
        .controller('pageListController', pageListController);

    function  pageListController($routeParams, pageService,$location) {

        var model = this;
        model.userId = $routeParams['uid'];
        model.websiteId = $routeParams['wid'];


        function init() {
            model.page = pageService.findPageByWebsiteId(model.websiteId);
        }
        init();
    }
})();
