/**
 * Created by moira on 6/2/17.
 */


module.exports = function (app,model) {

    var details = [
        { "_id": 111, "name": "Post 1", "websiteId": 1000, "description": "Lorem1" },
        { "_id": 222, "name": "Post 2", "websiteId": 1000, "description": "Lorem2" },
        { "_id": 333, "name": "Post 3", "websiteId": 1000, "description": "Lorem3" },
        { "_id": 444, "name": "Post 4", "websiteId": 1000, "description": "Lorem4" },
        { "_id": 555, "name": "Post 5", "websiteId": 2000, "description": "Lorem5" },
        { "_id": 666, "name": "Post 6", "websiteId": 2000, "description": "Lorem6" },
        { "_id": 777, "name": "Post 7", "websiteId": 2000, "description": "Lorem7" },
        { "_id": 888, "name": "Post 8", "websiteId": 2000, "description": "Lorem8" },
        { "_id": 999, "name": "Post 9", "websiteId": 3000, "description": "Lorem9" },
        { "_id": 121, "name": "Post 10", "websiteId": 3000, "description": "Lorem10" },
        { "_id": 122, "name": "Post 11", "websiteId": 3000, "description": "Lorem11" },
        { "_id": 113, "name": "Post 12", "websiteId": 3000, "description": "Lorem12" }

    ];


    app.post('/api/restaurant/:websiteId/detail', createDetail);
    app.get('/api/details/alldetails', allDetails);    //why I change it to api/user/alluser doesn;t work
    app.get('/api/restaurant/:websiteId/detail', findAllDetailsForWebsite);
    app.get('/api/detail/:detailId', findDetailById);
    app.put('/api/detail/:detailId', updateDetail);
    app.delete('/api/detail/:detailId', deleteDetail);


    function deleteDetail(req, res) {
        var detailId = req.params.detailId;
        model
            .detailModel
            .deleteDetail(detailId)
            .then(
                function(status){
                    res.sendStatus(200);
                },
                function(error){
                    res.sendStatus(400).send(error);
                }
            );
    }



    function updateDetail(req, res) {
        var detail = req.body;
        var detailId = req.params.detailId;
        model
            .detailModel
            .updateDetail(detailId, detail)
            .then(
                function(status){
                    res.sendStatus(200);
                },
                function(error){
                    res.sendStatus(400).send(error);
                }
            );
    }


    function createDetail(req, res) {
        var detail = req.body;
        var wid = req.params.websiteId;
        model
            .detailModel
            .createDetail(wid, detail)
            .then(
                function(newDetail){
                    res.send(newDetail);

                },
                function(error){
                    res.sendStatus(400).send(error);
                }
            );
    }

    //finid detail by id
    function findDetailById(req,res) {
        var detailId = req.params.detailId;
        model
            .detailModel
            .findDetailById(detailId)
            .then(
                function(detail){
                    if(detail){
                        res.send(detail);
                    }
                    else{
                        res.send('0');
                    }
                },
                function(error){
                    res.sendStatus(400).send(error);
                }
            );
    }


    //findallDetailsforwebsite
    function findAllDetailsForWebsite(req, res) {
        var wid = req.params.websiteId;
        model
            .detailModel
            .findAllDetailsForWebsite(wid)
            .then(
                function(details){
                    if(details){
                        res.json(details);
                    }
                    else{
                        res.send('0');
                    }
                },
                function(error){
                    res.sendStatus(400).send(error);
                }
            );
    }

    //testing purpose
    function allDetails(req, res) {
        res.send(details);


    }
}