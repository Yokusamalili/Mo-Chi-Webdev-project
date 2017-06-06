/**
 * Created by moira on 5/28/17.
 */
(function () {
    angular
        .module('WebAppMaker')
        .controller('pageNewController', pageNewController);

    function pageNewController($routeParams,
                                  $location,
                                  pageService) {
        var model = this;

        model.userId = $routeParams['uid'];
        model.websiteId = $routeParams['wid'];
        model.createPage = createPage;



        function createPage(page) {
            page.websiteId = parseInt(model.websiteId);
            pageService
                .createPage(page)
                .then(suc);
                function suc(page) {
                    $location.url("/user/" + model.userId + "/website/" + model.websiteId + "/page");

                };
        }
    }
})();