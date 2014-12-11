'use strict';

var mean = require('meanio');
var elasticsearch = require('elasticsearch');

exports.render = function(req, res) {
var client = new elasticsearch.Client({
  host: 'localhost:9200',
  log: 'trace'
});
// console.log(client);

client.ping({
  requestTimeout: 1000,
  // undocumented params are appended to the query string
  hello: 'elasticsearch!'
}, function (error) {
  if (error) {
    console.error('elasticsearch cluster is down!');
  } else {
    console.log('All is well');
  }
});
console.log(client);

  var modules = [];
  // Preparing angular modules list with dependencies
  for (var name in mean.modules) {
    modules.push({
      name: name,
      module: 'mean.' + name,
      angularDependencies: mean.modules[name].angularDependencies
    });
  }

  function isAdmin() {
    return req.user && req.user.roles.indexOf('admin') !== -1;
  }

  // Send some basic starting info to the view
  res.render('index', {
    user: req.user ? {
      name: req.user.name,
      _id: req.user._id,
      username: req.user.username,
      roles: req.user.roles
    } : {},
    modules: modules,
    isAdmin: isAdmin,
    adminEnabled: isAdmin() && mean.moduleEnabled('mean-admin')
  });
};
