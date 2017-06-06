var app = require('../../express');


app.post('/api/user/:userId/website', createWebsite);
app.get('/api/assignment/user/:userId/website', findAllWebsitesForUser);
app.get('/api/website/:websiteId', findWebsiteById);
app.put('/api/website/:websiteId', updateWebsite);
app.delete('/api/website/:websiteId', deleteWebsite);

var websites = [
    {"_id": "123", "name": "Facebook", "developerId": "456", "description": "Lorem"},
    {"_id": "234", "name": "Tweeter", "developerId": "456", "description": "Lorem"},
    {"_id": "456", "name": "Gizmodo", "developerId": "456", "description": "Lorem"},
    {"_id": "890", "name": "Go", "developerId": "123", "description": "Lorem"},
    {"_id": "567", "name": "Tic Tac Toe", "developerId": "123", "description": "Lorem"},
    {"_id": "678", "name": "Checkers", "developerId": "123", "description": "Lorem"},
    {"_id": "789", "name": "Chess", "developerId": "234", "description": "Lorem"}
];


function createWebsite(req, res) {
    console.log("********create");
    var website = req.body;
    website._id = (new Date()).getTime();
    console.log(website);
    websites.push(website);
    res.send(website);
}


function findAllWebsitesForUser(req, res) {
    console.log("********find All Websites For User");
    var resultSet = [];
    for (var w in websites) {
        if (websites[w].developerId === req.params.userId) {
            // websites[w].created = new Date();
            // websites[w].updated = new Date();
            resultSet.push(websites[w]);
        }
    }
    res.json(resultSet);
}


function findWebsiteById(req, res) {
    console.log("**************find Website By ID");
    var webid = req.params.websiteId;
    console.log(webid);                     //undefined
    for (var w in websites) {
        if (websites[w]._id !== parseInt(webid)) {
        } else {
            res.send(websites[w])
                .then(function (response) {
                    return response.data;
                });
        }
        res.sendStatus(404);
    }

    function updateWebsite(req, res) {
        console.log("***********Update Website");
        var web = req.body;
        console.log(web);
        var wid = parseInt(req.params.websiteId);
        for (var w in websites) {
            if (websites[w]._id == wid) {
                websites[w] = web;
            }
        }
        res.sendStatus(200);
    }


    function deleteWebsite(req, res) {
        console.log("********Delete");
        var wid = req.params.websiteId;
        for (var w in websites) {
            if (websites[w]._id == wid) {
                websites.splice(w, 1);
            }
        }
        res.sendStatus(200);
    }
}