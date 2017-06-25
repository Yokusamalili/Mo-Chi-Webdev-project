/**
 * Created by moira on 5/28/17.
 */

(function () {
    angular
        .module("WebAppMaker")
        .controller("DetailListController", DetailListController);

    function DetailListController($routeParams, DetailService) {
        var vm = this;

        vm.userId = $routeParams.uid;
        vm.websiteId = $routeParams.wid;

        function  init() {
            DetailService.findAllDetailsForWebsite(vm.websiteId)
                .success(function (ps) {
                    if(ps != '[]') {
                        vm.details = ps;
                    }
                })
                .error(function () {
                });
        }
        init();
    }
})();

