/**
 * Created by moira on 5/28/17.
 */
(function(){
    angular
        .module("WebAppMaker")
        .controller("WidgeChooserController", WidgeChooserController);

    function WidgeChooserController($routeParams, WidgetService, $location) {
        var vm = this;

        vm.userId = $routeParams['uid'];
        vm.restaurantId = $routeParams['wid'];
        vm.detailId = $routeParams['pid'];
        vm.wigetId = $routeParams['wgid'];


        vm.createWidget = createWidget;


        function init() {
            var promise = WidgetService.findWidgetbyId(vm.wigetId);
            promise
                .success(function (wig) {
                    if(wig != '0') {
                        vm.widget = wig;
                    }
                })
                .error(function () {

                });
        }

        init();



        function createWidget(pid, widget) {
            widget.detailId = pid;
            if(widget.widgetType == 'HEADER' && widget.size == null) {
                widget.size = 2;
            }
            if(widget.widgetType == 'TEXT') {
                widget.rows = 2;
            }
            WidgetService
                .createWidget(widget)
                .success(function (widget) {
                    console.log(widget);
                    console.log(widget._id);
                    $location.url("/user/" + vm.userId + "/restaurant/" + vm.restaurantId + "/detail/" + vm.detailId + "/widget/" + widget._id);

                })
                .error(function () {

                })
        }
    }
})();