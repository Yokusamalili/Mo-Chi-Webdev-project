/**
 * Created by moira on 5/28/17.
 */
(function () {
    angular
        .module('WebAppMaker')
        .controller('pageListController', pageListController);

    function pageListController($routeParams, pageService,$location) {

        var model = this;
        model.userId = $routeParams['uid'];
        model.websiteId = $routeParams['wid'];


        function init() {
            pageService
                .findAllPagesForWebsite(model.websiteId)
                .then(suc);
                function suc (ps) {
                    if(ps !== '[]') {
                        model.pages = ps;
                    }
                };
        }
        init();
    }
})();
