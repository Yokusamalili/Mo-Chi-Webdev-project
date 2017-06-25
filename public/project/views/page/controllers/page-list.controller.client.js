/**
 * Created by moira on 5/28/17.
 */

(function () {
    angular
        .module("WebAppMaker")
        .controller("PageListController", PageListController);

    function PageListController($routeParams, PageService) {
        var vm = this;

        vm.userId = $routeParams.uid;
        vm.websiteId = $routeParams.wid;

        function  init() {
            PageService.findAllPagesForWebsite(vm.websiteId)
                .success(function (ps) {
                    if(ps != '[]') {
                        vm.pages = ps;
                    }
                })
                .error(function () {
                });
        }
        init();
    }
})();

