/**
 * Created by moira on 5/28/17.
 */

// createPage(websiteId, page) - adds the page parameter instance to the local pages array. The new page's websiteId is set to the websiteId parameter
// findPageByWebsiteId(websiteId) - retrieves the pages in local pages array whose websiteId matches the parameter websiteId
// findPageById(pageId) - retrieves the page in local pages array whose _id matches the pageId parameter
// updatePage(pageId, page) - updates the page in local pages array whose _id matches the pageId parameter
// deletePage(pageId) - removes the page from local pages array whose _id matches the pageId parameter


(function () {
    angular
        .module("WebAppMaker")
        .factory("pageService", pageService);

    function pageService($http) {

        var api = {
            "createPage": createPage,
            "findAllPagesForWebsite": findAllPagesForWebsite,
            "findPageById": findPageById,
            "updatePage": updatePage,
            "deletePage": deletePage
        };
        return api;

        function createPage(page) {
            var newPage = {
                name:page.name,
                websiteId:page.websiteId
            }
            return $http.post('/api/website/'+page.websiteId+'/page', newPage);
        }

        function findAllPagesForWebsite(websiteId) {
            var url = '/api/website/'+websiteId+'/page';
            return $http.get(url);
        }

        function findPageById(pageId) {
            var url = '/api/page/'+parseInt(pageId);
            return $http.get(url);

        }

        function updatePage(pageId, page) {
            var url ="/api/page/"+ pageId;
            $http.put(url, page);
        }

        function deletePage(pageId) {
            var url ="/api/page/" + pageId;
            $http.delete(url);
        }
    }
})();