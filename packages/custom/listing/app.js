'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var Listing = new Module('listing');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
Listing.register(function(app, auth, database) {

  //We enable routing. By default the Package Object is passed to the routes
  Listing.routes(app, auth, database);

  //We are adding a link to the main menu for all authenticated users
  Listing.menus.add({
    title: 'listing example page',
    link: 'listing example page',
    roles: ['authenticated'],
    menu: 'main'
  });
  
  Listing.aggregateAsset('css', 'listing.css');

  /**
    //Uncomment to use. Requires meanio@0.3.7 or above
    // Save settings with callback
    // Use this for saving data from administration pages
    Listing.settings({
        'someSetting': 'some value'
    }, function(err, settings) {
        //you now have the settings object
    });

    // Another save settings example this time with no callback
    // This writes over the last settings.
    Listing.settings({
        'anotherSettings': 'some value'
    });

    // Get settings. Retrieves latest saved settigns
    Listing.settings(function(err, settings) {
        //you now have the settings object
    });
    */

  return Listing;
});
