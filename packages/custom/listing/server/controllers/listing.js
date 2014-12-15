'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Listing = mongoose.model('Listing'),
  _ = require('lodash');


/**
 * Find article by id
 */
exports.listing = function(req, res, next, id) {
  Listing.load(id, function(err, listing) {
    if (err) return next(err);
    if (!listing) return next(new Error('Failed to load article ' + id));
    req.listing = listing;
    next();
  });
};

/** 
 * Create an article
 */
exports.create = function(req, res) {
  var listing = new Listing(req.body);
  listing.user = req.user;

  listing.save(function(err) {
    if (err) {
      return res.json(500, {
        error: 'Cannot save the listing'
      });
    }
    res.json(listing);

  }); 
};

/**
 * Update an article
 */
exports.update = function(req, res) {
  var listing = req.listing;

  listing = _.extend(listing, req.body);

  listing.save(function(err) {
    if (err) {
      return res.json(500, {
        error: 'Cannot update the article'
      });
    }
    res.json(listing);

  });
};

/**
 * Delete an article
 */
exports.destroy = function(req, res) {
  var listing = req.listing;

  listing.remove(function(err) {
    if (err) {
      return res.json(500, {
        error: 'Cannot delete the article'
      });
    }
    res.json(listing);

  });
};

/**
 * Show an article
 */
exports.show = function(req, res) {
  res.json(req.listing);
};

/**
 * List of Articles
 */
exports.all = function(req, res) {
  Listing.find().sort('-created').populate('user', 'name username').exec(function(err, listing) {
    if (err) {
      return res.json(500, {
        error: 'Cannot list the articles'
      });
    }
    res.json(listing);

  });
};