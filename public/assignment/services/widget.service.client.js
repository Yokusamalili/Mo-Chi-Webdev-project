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
        .factory("WidgetService", WidgetService);
    function WidgetService() {
        var widgets = [
            {"_id": "123", "widgetType": "HEADING", "pageId": "321", "size": 2, "text": "GIZMODO"},
            {"_id": "234", "widgetType": "HEADING", "pageId": "321", "size": 4, "text": "Lorem ipsum"},
            {
                "_id": "345", "widgetType": "IMAGE", "pageId": "321", "width": "100%",
                "url": "http://lorempixel.com/400/200/"
            },
            {"_id": "456", "widgetType": "HTML", "pageId": "321", "text": "<p>Lorem ipsum</p>"},
            {"_id": "567", "widgetType": "HEADING", "pageId": "321", "size": 4, "text": "Lorem ipsum"},
            {
                "_id": "678", "widgetType": "YOUTUBE", "pageId": "321", "width": "100%",
                "url": "https://youtu.be/AM2Ivdi9c4E"
            },
            {"_id": "789", "widgetType": "HTML", "pageId": "321", "text": "<p>Lorem ipsum</p>"}
        ];
        var api = {
            "createWidget": createWidget,
            "findWidgetsByPageId": findWidgetsByPageId,
            "findWidgetById": findWidgetById,
            "updateWidget": updateWidget,
            "deleteWidget": deleteWidget
        };
        return api;
        function createWidget(pageId, widget) {
            widget._id = widgets[widgets.length-1]._id+1+"";
            widget.pageId = pageId;
            widgets.push(widget);
        }

        function findWidgetsByPageId(pageId) {
            var resultSet = [];
            for (var p in widgets) {
                if (widgets[p].pageId === pageId) {
                    resultSet.push(widgets[p]);
                }
            }
            return resultSet;
        }

        function findWidgetById(widgetId) {
            return widgets.find(function (widget) {
                return widget._id === widgetId;
            });
        }

        function updateWidget(widgetId, widget) {
            var oldWidget = findWidgetById(widgetId);
            widget._id = widgetId;
            users[widgets.indexOf(oldWidget)] = widget;

        }

        function deleteWidget(widgetId) {
            var widget = widgets.find(function (widget) {
                return widget._id === widgetId;
            });
            var index = widgets.indexOf(widget);
            widgets.splice(index, 1);
        }
    }
})();