

/*
'use strict';
var path = require('path'), 
// "/../.." Moves two directories back, NOT FORWARD. 
//__dirname = (The path of this file) = Desktop/meaner/gold/config/env /../.. jumps back two dirs
rootPath = path.normalize(__dirname + '/../..');
//ES6  - ECMA script
//export a complete object in one assignment instead of building it one property at a time,
//assign it to module.exports instead of exports
module.exports = {
//JS reduce function
root: rootPath,
http: {
//Sets the port to the environment variable named PORT.
//If this is not defined (false) set the port to 3000
 port: process.env.PORT || 3000 
//Honey Badger - Ruby error management
//CDATA - Character Data
//Lodash - utility library
//describe
//it
//expect
//.toBe
//.not
//nodemon - reloads the page
//Mycenae - greece
//Albania
//Macedonia
//beforeEach
//afterEach
//mean list
//Dictionary 
//Chai
//Mocha
//Greece - Hellenic Republic
//OECD - Organisation for Economic Co-operation and Development
//addEventListener
//ie - id est - that is
//eg - exemplia gratia - examples
//Maccau - Chinese island, gmabling allowed
//Gupta - Maharaja Sri Gupta
//font squirrel
//<!--[if IE 6>
//<![endif]-->
//Rembrandt
//:link Css
//:visited Css
// + Adjacent Selector Css
//thead tbody tfoot
//$index
//$new

}
}
*/

'use strict';

var path = require('path'),
rootPath = path.normalize(__dirname + '/../..');

module.exports = {
  root: rootPath,
  http: {
    port: process.env.PORT || 3000
  },
  https: {
    port: false,

    // Paths to key and cert as string
    ssl: {
      key: '',
      cert: ''
    }
  },
  //Set hostname to HOST or HOSTNAME env variables
  hostname: process.env.HOST || process.env.HOSTNAME,
  db: process.env.MONGOHQ_URL,
  //Enables swig templating engine 
  templateEngine: 'swig',
  buhBaby:"bubuhbuhbuhbaby",
  // The secret should be set to a non-guessable string
  // Used to compute a session hash
  sessionSecret: 'MEAN',

  // Name of the MongoDB collection to store sessions in
  sessionCollection: 'sessions',

  // The session cookie settings
  sessionCookie: {
    path: '/',
    httpOnly: true,
    // If secure is set to true then it will cause the cookie to be set
    // only when SSL-enabled (HTTPS) is used, and otherwise it won't
    // set a cookie. 'true' is recommended yet it requires the above
    // mentioned pre-requisite.
    secure: false,
    // Only set the maxAge to null if the cookie shouldn't be expired
    // at all. The cookie will expunge when the browser is closed.
    maxAge: null
  },

  // The session cookie name
  sessionName: 'connect.sid'
};

