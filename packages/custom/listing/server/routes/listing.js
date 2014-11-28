'use strict';

// The Package is past automatically as first parameter
module.exports = function(Listing, app, auth, database) {

  app.get('/listing/example/anyone', function(req, res, next) {
    res.send('Anyone can access this');
  });

  app.get('/listing/example/auth', auth.requiresLogin, function(req, res, next) {
    res.send('Only authenticated users can access this');
  });

  app.get('/listing/example/admin', auth.requiresAdmin, function(req, res, next) {
    res.send('Only users with Admin role can access this');
  });

  app.get('/listing/example/render', function(req, res, next) {
    Listing.render('index', {
      package: 'listing'
    }, function(err, html) {
      //Rendering a view from the Package server/views
      res.send(html);
    });
  });
};
