/**
 * Created by moira on 5/28/17.
 */
(function () {
    angular
        .module('WebAppMaker')
        .controller('widgetListController', widgetListController);

    function widgetListController($routeParams,
                                  widgetService,$sce) {
        var model = this;

        model.userId= $routeParams['uid'];
        model.websiteId = $routeParams['wid'];
        model.pageId = $routeParams['pid'];
        model.trustThisContent = trustThisContent;
        model.getYouTubeEmbedUrl = getYouTubeEmbedUrl;
        model.getWidgetUrlForType = getWidgetUrlForType;

        function init() {
            model.widgets = widgetService.findWidgetsByPageId(model.pageId);
        }
        init();

        //implement
        function getWidgetUrlForType(type) {
            return 'views/widget/templates/widget-'+type.toLowerCase()+'.view.client.html';
        }

        function getYouTubeEmbedUrl(youTubeLink) {
            var embedUrl = 'https://www.youtube.com/embed/';
            var youTubeId = youTubeLink.split('/');
            embedUrl += youTubeId[youTubeId.length - 1];
            return $sce.trustAsResourceUrl(embedUrl);

        }

        function trustThisContent(html) {
            // diligence to scrub any unsafe content
            return $sce.trustAsHtml(html);
        }
    }
})();