/**
 * Created by moira on 6/5/17.
 */
var app = require('../../express');

var users = [
    {_id: "123", username: "alice", password: "alice", firstName: "Alice", lastName: "Wonder"},
    {_id: "234", username: "bob", password: "bob", firstName: "Bob", lastName: "Marley"},
    {_id: "345", username: "charly", password: "charly", firstName: "Charly", lastName: "Garcia"},
    {_id: "456", username: "jannunzi", password: "jannunzi", firstName: "Jose", lastName: "Annunzi"}
];

app.post('/api/user', createUser);
// app.get('/api/user', findUserByUsername);
app.get('/api/user', userLogin);
app.get('/api/user/:uid', findUserById);
app.put('/api/user/:uid', updateUser);
app.delete('/api/user/:uid', deleteUser);
app.get('/api/users/all', all);


function userLogin(req, res) {
    var username = req.query.username;
    var password = req.query.password;
    if (password && username) {
        findUserByCredentials(req, res);
    }
    else if (username) {
        findUserByUsername(req, res);
    }
}

function all(req, res) {
    res.send(users);
}

function deleteUser(req, res) {
    var userId = req.params['uid'];
    var user = users.find(function (user) {
        return user._id === userId;
    });
    var index = users.indexOf(user);
    users.splice(index, 1);
    res.sendStatus(200);
}


function updateUser(req, res) {
    var user = req.body;
    var userId = req.params['uid'];
    for (var u in users) {
        if (userId === users[u]._id) {
            users[u] = user;
            res.sendStatus(200);
            return;
        }
    }
    res.sendStatus(404);
}


function createUser(req, res) {
    var user = req.body;
    user._id = (new Date()).getTime() + "";
    users.push(user);
    res.send(user);
}


function findUserByUsername(req, res) {
    var username = req.query.username;
    for (var u in users) {
        var user = users[u];
        if (user.username === username) {
            res.send(user);
            return;
        }
    }
    res.sendStatus(404);
}


function findUserByCredentials(req, res) {
    var username = req.query['username'];
    var password = req.query['password'];
    for (var u in users) {
        var user = users[u];
        if (user.username === username &&
            user.password === password) {
            res.send(user);
        }
    }
    res.sendStatus(404);
}

function findUserById(req, res) {
    var userId = req.params.uid;
    for (var u in users) {
        if (users[u]._id === userId) {
            res.send(users[u]);
        }
    }
}