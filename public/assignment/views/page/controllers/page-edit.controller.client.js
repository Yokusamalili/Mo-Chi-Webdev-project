/**
 * Created by moira on 5/28/17.
 */


(function () {
    angular
        .module('WebAppMaker')
        .controller('pageEditController', pageEditController);

    function pageEditController($routeParams,
                                $location,
                                pageService) {
        var model = this;

        model.userId = $routeParams['uid'];
        model.pageId = $routeParams['wid'];
        model.pageId = $routeParams['pid'];
        model.updatePage = updatePage;

        function init() {
            model.pages = pageService.findPageByWebsiteId(model.userId);
        }
        init();

        // implementation
        function updatePage(pageName, pageDescription){

            if(pageName === null || pageName === '' || typeof pageName === 'undefined') {
                model.error = 'Name is required :D';
            } else {
                if (typeof pageDescription === 'undefined'){
                    pageDescription = '';
                }
                var page = {};
                page.name = pageName;
                page.websiteId = model.websiteId;
                page.description = pageDescription;
                pageService.updatePage(model.pageId,page);
                $location.url('/user/' + model.userId + '/website/' + model.websiteId + '/page');
            }
        }
        
        function deletePage(pageId) {
            pageService.deletePage(pageId);
            $location.url('/user/'+model.userId+'/website'+model.websiteId+'/page'+model.pageId);
        }
    }
})();




