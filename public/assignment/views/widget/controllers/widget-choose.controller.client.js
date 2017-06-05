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


        //implement
        function createWidget(awidget){
            awidget.pageId = model.pageId;
            widgetService.createWidget(model.pageId,awidget);
            $location.url('/user/' + model.userId + '/website/' + model.websiteId + '/page/' +model.pageId+'/widget');
        }
    }
})();
