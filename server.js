var MPORT=27017;

var app = require('./app'),
    debug = require('debug')('demo:server'),
    util = require('util'),
    port = process.env.PORT || 9000;
    MongoClient = require('mongodb').MongoClient,
    mongoUrl = util.format('mongodb://mongo:%s/demo', MPORT);//process.env.MONGO_PORT);
console.log(mongoUrl);
MongoClient.connect(mongoUrl, function (err, db) {
  if (err) {
    console.error(err);
  } else {
    debug('connected to mongo');
    var server = app.listen(port, function () {
      app.set('server', server);
      app.set('db', db);
      debug('server listening on port ' + port);
    });
  }
});

