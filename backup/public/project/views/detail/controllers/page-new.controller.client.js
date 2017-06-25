/**
 * Created by moira on 5/28/17.
 */


(function () {
    angular
        .module("WebAppMaker")
        .controller("DetailNewController", DetailNewController);

    function DetailNewController($routeParams, DetailService, $location) {
        var vm = this;

        vm.websiteId = $routeParams.wid;
        vm.userId = $routeParams.uid;
        vm.userId = $routeParams.uid;
        vm.createDetail = createDetail;


        function createDetail(detail) {
            detail.websiteId = vm.websiteId;
            DetailService
                .createDetail(detail)
                .success(function (detail) {
                    $location.url("/user/" + vm.userId + "/restaurant/" + vm.websiteId + "/detail");

                })
                .error(function () {

                })

        }
    }
})();

