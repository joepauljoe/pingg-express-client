const express = require("express");
const neo4j = require('neo4j-driver');
const bodyParser = require('body-parser');
const cors = require('cors');
const redis = require('redis');

var app = express();
const port = process.env.PORT || 9001;
var jsonParser = bodyParser.json()

app.post('/', (req, res) => {
    res.send("SDFSDFSDFSDFf");
})

app.post('/report-issue', jsonParser, (req,res) => {
    if(req.body.userID) {
        if(req.body.time) {
            if(req.body.text) {





            } else {
                res.send("Missing text field");
            }
        } else {
            res.send("Missing time field");
        }
    } else {
        res.send("Missing userID field");
    }
})

app.post('/post/:postID', jsonParser, (req,res) => {
    if(req.params.postID) {
        if(req.body.time) {
            if(req.body.text) {
                if(req.body.userID) {
                    if(req.body.post_type) {
                        if(req.body.channelID) {
                            if(req.body.content) {


                                //Add in a check for url, but it does not necessarily need to be here


                            } else {
                                res.sendStatus("Missing content field")
                            }
                        } else {
                            res.sendStatus("Missing channelID field")
                        }
                    } else {
                        res.sendStatus("Missing postType field")
                    }
                } else {
                    res.sendStatus("Missing userID field")
                }
            } else {
                res.send("Missing text field");
            }
        } else {
            res.send("Missing time field");
        }
    } else {
        res.send("Missing postID field");
    }
})

app.listen(port, () => {
    console.log("Server live @ http://localhost:" + port);
})