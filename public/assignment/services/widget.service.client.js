/**
 * Created by moira on 5/28/17.
 */
// createWidget(pageId, widget) - adds the widget parameter instance to the local widgets array. The new widget's pageId is set to the pageId parameter
// findWidgetsByPageId(pageId) - retrieves the widgets in local widgets array whose pageId matches the parameter pageId
// findWidgetById(widgetId) - retrieves the widget in local widgets array whose _id matches the widgetId parameter
// updateWidget(widgetId, widget) - updates the widget in local widgets array whose _id matches the widgetId parameter
// deleteWidget(widgetId) - removes the widget from local widgets array whose _id matches the widgetId parameter
//

(function () {
    angular
        .module("WebAppMaker")
        .factory("widgetService", widgetService);

    function widgetService($http) {
        var api = {
            "createWidget": createWidget,
            "findWidgetsByPageId": findWidgetsByPageId,
            "findWidgetById": findWidgetById,
            "updateWidget": updateWidget,
            "deleteWidget": deleteWidget,
            "sortWidget": sortWidget
        };
        return api;

        function sortWidget(pageId, init, final) {
            var url = "/api/page/" + pageId + "/widget?start=" + init + "&end=" +final;
            return $http.put(url);
        }


        function createWidget(pageId) {
            return $http.post('/api/page/'+pageId+'/widget');
        }

        function findWidgetsByPageId(pageId) {
            var url = '/api/page/'+pageId+'/widget';
            return $http.get(url);
        }

        function findWidgetById(widgetId) {
            var url = '/api/widget/'+widgetId;
            return $http.get(url);
        }

        function updateWidget(widgetId, widget) {
            var url ="/api/widget/"+widgetId;
            $http.put(url,widget);

        }

        function deleteWidget(widgetId) {
            var url ="/api/widget/" + widgetId;
            $http.delete(url);
        }
    }
})();