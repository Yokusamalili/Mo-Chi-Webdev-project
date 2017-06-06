/**
 * Created by moira on 5/28/17.
 */


(function () {
    angular
        .module('WebAppMaker')
        .controller('pageEditController', pageEditController);

    function pageEditController($routeParams,
                                $location,
                                pageService) {
        var model = this;

        model.userId = $routeParams['uid'];
        model.pageId = $routeParams['wid'];
        model.pageId = $routeParams['pid'];
        model.updatePage = updatePage;
        model.deletePage =deletePage;

        function init() {
            pageService
                .findPageById(model.pageId)
                .success(function (pg) {
                    if(pg != '0') {
                        model.page = pg;
                    }
                })
                .error(function () {

                });
        }

        init();

        // implementation
        function updatePage(currentpage) {
            pageService
                .updatePage(currentpage);
            $location.url("/user/" + model.userId + "/website/" + model.websiteId + "/page");
        }

        function deletePage(pageId) {
            pageService.deletePage(pageId);
            $location.url('/user/' + model.userId + '/website' + model.websiteId + '/page' + model.pageId);
        }
    }
})();




