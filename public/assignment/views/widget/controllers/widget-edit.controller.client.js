/**
 * Created by moira on 5/28/17.
 */
(function () {
    angular
        .module('WebAppMaker')
        .controller('widgetEditController', widgetEditController);

    function widgetEditController($routeParams,
                                  $location,
                                  widgetService) {

        var model = this;

        model.userId = $routeParams['uid'];
        model.websiteId = $routeParams['wid'];
        model.pageId = $routeParams['pid'];
        model.widgetId = $routeParams['wgid'];
        model.widget = widgetService.findWidgetById(model.widgetId);
        model.updateWidget = updateWidget;

        //implement
        function updateWidget(awidget){
            console.log(awidget);
            widgetService.updateWidget(model.widgetId,awidget);
            $location.url('/user/' + model.userId + '/website/' + model.websiteId + '/page/' +model.pageId+'/widget');

        }
    }
})();
