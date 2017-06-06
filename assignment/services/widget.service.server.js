// widget.service.server.js
var app = require('../../express');

var multer = require('multer'); // npm install multer --save
var upload = multer({ dest: __dirname+'/../../../public/assignment/uploads' });

app.post('/api/page/:pageId/widget',createWidget);
app.get('/api/page/:pageId/widget',findAllWidgetsForPage);
app.get('/api/widget/:widgetId',findWidgetById);
app.put('/api/widget/:widgetId', updateWidget);
app.delete('/api/widget/:widgetId', deleteWidget);
app.post ("/api/upload", upload.single('myFile'), uploadImage);
app.put("/api/page/:pageId/widget", sortWidget);

function sortWidget(req, res) {
    var pageId = req.params.pageId;
    var init = req.query["init"];
    var final = req.query["final"];
    if (init && final) {
        console.log(init + "    " + final);
        widgetModel
            .reorderWidget(init, final, pageId)
            .then(function (widgets) {
                res.json(widgets);
            }, function (error) {
                res.sendStatus(404);
            });
    }
    else {
    }
}


function createWidget(req, res) {
    var widget = req.body;
    widgets.push(widget);
    res.send(widget);
}

function findAllWidgetsForPage(req, res) {
    var pid = req.params.pageId;
    var result = [];
    for(var w in widgets) {
        if(widgets[w].pageId=== parseInt(pid)) {
            result.push(widgets[w]);
        }
    }
    res.send(result);
    return;
}


function findWidgetById(req, res) {
    var wigid = parseInt(req.params.widgetId);
    for (var w in widgets) {
        if (widgets[w]._id === wigid) {
            res.send(widgets[w]);
            return;
        }
    }
    res.sendStatus(404);
}


function updateWidget(req, res) {
    consloe.log("**********Update");
    var updatedwidget = req.body;
    var wigid = parseInt(req.params.widgetId);
    for(var w in widgets) {
        if(widgets[w]._id == wigid) {
            widgets[w] = updatedwidget;
        }
    }
    res.sendStatus(200);
}

function deleteWidget(req, res) {
    consloe.log("**********Delete");
    var wigid = parseInt(req.params.widgetId);
    for(var w in widgets) {
        if(widgets[w]._id == wigid) {
            widgets.splice(w,1);
        }
    }
    res.sendStatus(200);
}

function uploadImage(req, res) {
    var userId = req.body.userId;
    var websiteId = req.body.websiteId;
    var pageId = req.body.pageId;
    var widgetId = req.body.widgetId;
    var width = req.body.width;
    var myFile = req.file;

    var originalname = myFile.originalname;
    var filename = myFile.filename;
    var path = myFile.path;
    var destination = myFile.destination;
    var size = myFile.size;
    var mimetype = myFile.mimetype;

    for (var w in widgets) {
        if (widgets[w]._id === parseInt(widgetId)) {
            console.log("found!");
            widgets[w].url = "/assignment/uploads/" + filename;
        }
    }
    console.log(myFile);
    res.sendStatus(200);
    res.redirect("/assignment/#/user/" + userId + "/website/" + websiteId + "/page/" + pageId + "/widget/" + widgetId);
}

