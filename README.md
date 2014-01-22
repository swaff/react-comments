----------


react-comments
==============

A node/express application used for testing out the [react.js][1] framework by completing and adding to the comment tutorial.

This application serves the first page and supplies a mongodb api for persisting and retrieving the comments.




Make sure [mongodb][2] is installed and running

    mongod

Install jsx

    npm install -g react-tools

Get the jsx translations on watch to convert the jsx in the src directory to JavaScript in the build directory.

    jsx --watch public/javascripts/src public/javascripts/build

Install nodemon and start the application

    npm install
    node app.js





  [1]: http://facebook.github.io/react/
  [2]: http://www.mongodb.org/
