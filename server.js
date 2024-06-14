const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const mongodb = require('./db/connect');

const port = 8080;

app.use('/', require('./routes'));

mongodb.initDb((err, mongodb) => {
    if (err) {
      console.log(err);
    } else {
        app.listen(process.env.port || port);
        console.log('Web Server is listening at port ' + (process.env.port || port));
    }
  });
