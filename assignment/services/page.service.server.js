/**
 * Created by moira on 5/28/17.
 */

module.exports = function (app) {

    var pages = [{"_id": "321", "name": "Post 1", "websiteId": "456", "description": "Lorem"},
        {"_id": "432", "name": "Post 2", "websiteId": "456", "description": "Lorem"},
        {"_id": "543", "name": "Post 3", "websiteId": "456", "description": "Lorem"},
        {"_id": "admin", "name": "hshhs", "websiteId": "ddd", "description": "LA LA LA"}];


    app.post('/api/website/:websiteId/page', createPage);
    app.get('/api/website/:websiteId/page', findAllPagesForWebsite);
    app.get('/api/page/:pageId', findPageById);
    app.put('/api/page/:pageId', updatePage);
    app.delete('/api/page/:pageId', deletePage);


    function createPage(req, res) {
        console.log("***************create success!");
        var page = req.body;
        page._id = (new Date()).getTime();
        pages.push(page);
        res.send(page);
    }

    function findAllPagesForWebsite(req, res) {
        console.log("**************find ALL Pages For Website");
        var wid = req.params.websiteId;
        console.log(wid);
        var result = [];
        for(var p in pages) {
            if(pages[p].websiteId === parseInt(wid)) {
                result.push(pages[p]);
            }
        }
        res.send(result);
    }

    function findPageById(req,res) {
        console.log("**************find Page By ID");
        var pid = parseInt(req.params.pageId);
        console.log(pid);
        for (var p in pages) {
            if (pages[p]._id === pid) {
                res.send(pages[p]);
                return;
            }
        }
        res.sendStatus(404);
    }

    function updatePage(req, res) {
        console.log("***********update Page");
        var updatedpage = req.body;
        console.log(updatedpage);
        var pid = parseInt(req.params.pageId);
        for(var p in pages) {
            if(pages[p]._id == pid) {
                pages[p] = updatedpage;
            }
        }
        res.sendStatus(200);
    }

    function deletePage(req, res) {
        console.log("*************Delete");
        var pid = parseInt(req.params.pageId);
        for(var p in pages) {
            if(pages[p]._id == pid) {
                pages.splice(p,1);
            }
        }
        res.sendStatus(200);
    }
}