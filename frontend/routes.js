var request = require('request');
var backendServerUrl = 'http://backend:8080/todo';

module.exports.init = function (app) {
    app.get('/todoAction', function (req, res) {
        request({
                method: 'get',
                url: backendServerUrl,
                json: true
            }, function (err, response, data) {
                res.json({todos: !err ? data._embedded.todos : [], err: err || ""});
            }
        );
    });

    app.post('/todoAction', function (req, res) {
        var body = req.body;
        body.done = false;
        request({
                method: 'post',
                url: backendServerUrl,
                body: body,
                json: true
            }, function (err, response, data) {
              if(err){
                console.log(err);
              }
              res.json({todo: !err ? data : [], err: err || ""});
            }
        )
    });

    app.put('/todoAction', function (req, res) {
        var body = req.body;
        request({
                method: 'put',
                url: body._links.self.href,
                body: body,
                json: true
            }, function (err, response, data) {
              if(err){
                console.log(err);
              }
              res.json({todo: !err ? data : [], err: err || ""});
            }
        )
    })
};
