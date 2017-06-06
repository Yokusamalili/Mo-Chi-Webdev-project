/**
 * Created by moira on 5/28/17.
 */

(function () {
    angular
        .module('WebAppMaker')
        .controller('widgetChooseController', widgetChooseController);

    function widgetChooseController($routeParams,
                                    $location,
                                    widgetService) {

        var model = this;

        model.userId = $routeParams['uid'];
        model.websiteId = $routeParams['wid'];
        model.pageId = $routeParams['pid'];
        model.widgetId = $routeParams['wgid'];
        model.widget = widgetService.findWidgetById(model.widgetId);
        model.createWidget = createWidget;

        function init() {
            widgetService
                .findWidgetbyId(model.wigetId)
                .success(function (wiget) {
                    if (wiget != '0') {
                        model.widget = wiget;
                    }
                })
                .error(function () {

                });
            ;
        }

        init();

        //implement
        function createWidget(pid, widget) {
            widget._id = (new Date()).getTime();
            widget.pageId = pid;
            if (widget.widgetType == 'HEADER' && widget.size == null) {
                widget.size = 2;
            }
            widgetService
                .createWidget(widget)
                .success(function () {
                    $location.url("/user/" + model.userId + "/website/" + model.websiteId + "/page/" + model.pageId + "/widget/" + widget._id);

                })
                .error(function () {

                })
        }
    }
})();
