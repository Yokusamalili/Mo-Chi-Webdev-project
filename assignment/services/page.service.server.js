/**
 * Created by moira on 5/28/17.
 */

// createPage(websiteId, page) - adds the page parameter instance to the local pages array. The new page's websiteId is set to the websiteId parameter
// findPageByWebsiteId(websiteId) - retrieves the pages in local pages array whose websiteId matches the parameter websiteId
// findPageById(pageId) - retrieves the page in local pages array whose _id matches the pageId parameter
// updatePage(pageId, page) - updates the page in local pages array whose _id matches the pageId parameter
// deletePage(pageId) - removes the page from local pages array whose _id matches the pageId parameter



(function() {
    angular
        .module("WebAppMaker")
        .factory("pageService", pageService);
    function pageService() {
        var pages = [ { "_id": "321", "name": "Post 1", "websiteId": "456", "description": "Lorem" },
            { "_id": "432", "name": "Post 2", "websiteId": "456", "description": "Lorem" },
            { "_id": "543", "name": "Post 3", "websiteId": "456", "description": "Lorem" },
            { "_id": "admin", "name": "hshhs", "websiteId": "ddd", "description": "LA LA LA" }];

        var api = {
            "createPage"   : createPage,
            "findPageByWebsiteId" : findPageByWebsiteId,
            "findPageById"   : findPageById,
            "updatePage"   : updatePage,
            "deletePage"   : deletePage
    };
        return api;

        function createPage(websiteId, page) {
            page._id = pages[pages.length-1]._id+1+"";
            page.websiteId = websiteId;
            pages.push(page);

        }
        function findPageByWebsiteId(websiteId) {
            var resultSet = [];
            for (var p in pages) {
                if (pages[p].websiteId === websiteId) {
                    resultSet.push(pages[p]);
                }
            }
            return resultSet;
        }
        function findPageById(pageId) {
            return pages.find(function (page) {
                return page._id === pageId;
            });
        }
        function updatePage(pageId, page) {
            var oldPage = findWebsiteById(pageId);
            page._id = pageId;
            pages[pages.indexOf(oldPage)] = page
        }
        function deletePage(pageId) {
            var page = pages.find(function (page) {
                return page._id === pageId;
            });
            var index = pages.indexOf(page);
            pages.splice(index, 1);
        }
    }
})();