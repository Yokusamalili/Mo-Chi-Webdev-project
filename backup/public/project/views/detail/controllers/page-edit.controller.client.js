/**
 * Created by moira on 5/28/17.
 */

(function () {
    angular
        .module("WebAppMaker")
        .controller("DetailEditController", DetailEditController);

    function DetailEditController($routeParams, DetailService, $location) {
        var vm = this;
        vm.userId = $routeParams.uid;
        vm.detailId = $routeParams.pid;
        vm.websiteId = $routeParams.wid;
        vm.updateDetail = updateDetail;
        vm.deleteDetail =deleteDetail;

        function init() {
            var promise = DetailService.findDetailById(vm.detailId);
            promise
                .success(function (pg) {
                    if(pg != '0') {
                        vm.detail = pg;
                    }
                })
                .error(function () {

                });
        }
        return init();
        //svm.details = DetailService.findDetailByWebsiteId(vm.websiteId);



        function deleteDetail(pid) {
            DetailService.deleteDetail(pid);
            $location.url("/user/"+vm.userId+"/restaurant/"+vm.websiteId+"/detail");
        }


        function updateDetail(currentdetail) {
            DetailService.updateDetail(currentdetail);
            $location.url("/user/"+vm.userId+"/restaurant/"+vm.websiteId+"/detail");
        }




    }
})();

