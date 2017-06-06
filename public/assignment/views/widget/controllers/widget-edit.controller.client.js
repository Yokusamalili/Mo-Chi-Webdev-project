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
        model.deleteWidget = deleteWidget;

        function init() {
            widgetService
                .findWidgetbyId(model.wigetId)
                .success(function (wig) {
                    if(wig != '0') {
                        model.widget = wig;
                    }
                })
                .error(function () {

                });

            widgetService
                .findWidgetTypeById(model.wigetId)
                .success(function (wtype) {
                    if(wtype != '0') {
                        model.wigtype = wtype.toLowerCase();
                    }
                })
                .error(function () {

                });


            widgetService
                .findWidgetsForPage(model.pageId)
                .success(function (wigs) {
                    if(wigs != '[]') {
                        model.widgets = wigs;
                    }
                })
                .error(function () {
                });
        }
        init();

        //implement
        function deleteWidget(wgid) {
            wgid = model.widget._id;
            widgetService.deleteWidget(wgid);
            alert("This Widget has been removed, click back to widget list")
            $location.url("/user/"+model.userId+"/website/"+model.websiteId+"/page/"+model.pageId+"/widget");

        }

        function updateWidget(currentwidget) {
            currentwidget = model.widget;
            widgetService.updateWidget(currentwidget);
            $location.url("/user/"+model.userId+"/website/"+model.websiteId+"/page/"+model.pageId+"/widget");

        }
    }
})();
