////////////////////////////////////////
///////// Import Dependencies //////////
////////////////////////////////////////
const express = require('express') //express framework
const morgan = require('morgan') //morgan logger for request info
const session = require('express-session')
const MongoStore = require('connect-mongo') // connect-mongo(for the session)
require('dotenv').config()
const methodOverride = require('method-override') // for forms and CRUD

////////////////////////////////////////
///////// Middleware Function //////////
////////////////////////////////////////
// instead of filling server.js with a buncha stuff
//we'll contain our middleware actions to a single function
// this function takes an entire app as an argument
// from there it runs requests through all of our middleware
const middleware = (app) => {
    // middleware runs before all routes
    // EVERY request is first processed through middleware
    // method-override - allows us to use forms to theire full potential
    app.use(methodOverride('_method'))
    // morgan logs our requests to the console
    app.use(morgan('tiny')) //tiny is a qualifier that says - be short
    // to serve stylesheets, we use static files in the public directory
    app.use(express.static('public'))
    // to utilize json we can add this
    app.use(express.json())

    
}

////////////////////////////////////////
///////// Export thMiddleware Function /
////////////////////////////////////////
module.exports = middleware

