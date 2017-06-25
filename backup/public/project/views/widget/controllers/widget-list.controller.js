/**
 * Created by moira on 5/28/17.
 */

(function(){
    angular
        .module("WebAppMaker")
        .controller("WidgeListController", WidgeListController);

    function WidgeListController($routeParams, WidgetService, $sce) {
        var vm = this;

        vm.userId = $routeParams['uid'];
        vm.restaurantId = $routeParams['wid'];
        vm.detailId = $routeParams['pid'];
        vm.wgid = $routeParams['wgid'];
        vm.checkSafeHtml = checkSafeHtml;
        vm.checkSafeYouTubeUrl = checkSafeYouTubeUrl;
        vm.sort = sort;


        function init() {
            WidgetService.findWidgetsForDetail(vm.detailId)
                .success(function (widgetList) {
                    vm.widgets = widgetList;
                })
            $(".wam-widgets").sortable({
                axis: 'y'
            });
        };
        init();


        function sort(start, end) {
            WidgetService
                .sortItem(vm.detailId, start, end)
                .success(function(code){})
                .catch(function(error){
                    console.log(error);
                });
        }

        function checkSafeHtml(html) {
            return $sce.trustAsHtml(html);
        }


        function checkSafeYouTubeUrl(url) {
            var parts = url.split('/');
            var id = parts[parts.length - 1];
            url = "https://www.youtube.com/embed/"+id;
            console.log(url);
            return $sce.trustAsResourceUrl(url);
        }

    }
})();