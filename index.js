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
                                if(req.body.isComment) {
                                    if (req.body.parentPostID) {
                                        // Add as a comment




                                    } else { 
                                        res.sendStatus("Missing missing parentPostID field")
                                    }
                                } else {
                                    // Make standalone post



                                    
                                }
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

app.post('/users/:userID/upvoted', jsonParser, (req,res) => {
    if(req.params.userID) {
        if(req.body.postID) {
            if(req.body.text) {






            }
        } else {
            res.send("Missing postID field");
        }
    } else {
        res.send("Missing userID field");
    }
})

app.post('/users/:userID/followed-game', jsonParser, (req,res) => {
    if(req.params.userID) {
        if(req.body.gameID) {



        } else {
            res.send("Missing time field");
        }
    } else {
        res.send("Missing userID field");
    }
})

app.post('/users/:userID/rated-game', jsonParser, (req,res) => {
    if(req.params.userID) {
        if(req.body.gameID) {
            if(req.body.rating) {



            } else {
                res.send("Missing rating field");
            }
        } else {
            res.send("Missing time field");
        }
    } else {
        res.send("Missing userID field");
    }
})

app.post('/users/:userID/followed-channel', jsonParser, (req,res) => {
    if(req.params.userID) {
        if(req.body.channelID) {



        } else {
            res.send("Missing channelID field");
        }
    } else {
        res.send("Missing userID field");
    }
})

app.post('/users/:userID/played-game', jsonParser, (req,res) => {
    if(req.params.userID) {
        if(req.body.gameID) {
            if(req.body.screenName) {




            } else {
                res.send("Missing screenName field");
            }
        } else {
            res.send("Missing gameID field");
        }
    } else {
        res.send("Missing userID field");
    }
})

app.post('/games/:gameID', jsonParser, (req,res) => {
    if(req.params.gameID) {
        if(req.body.ageRatings) {
            if(req.body.coverURL) {
                if(req.body.description) {
                    if(req.body.firstReleaseDate) {
                        if(req.body.franchise) {
                            if(req.body.genres) {
                                if(req.body.name) {
                                    if(req.body.platforms) {
                                        if(req.body.rating) {
                                            if(req.body.ratingCount) {
                                                if(req.body.screenshots) {
                                                    if(req.body.searchableIndex) {
                                                        if(req.body.similarGames) {
                                                            if(req.body.videos) {



                
                                                            } else {
                                                                res.send("Missing videos field");
                                                            }
                                                        } else {
                                                            res.send("Missing similarGames field");
                                                        }
                                                    } else {
                                                        res.send("Missing searchableIndex field");
                                                    }
                                                } else {
                                                    res.send("Missing screenshots field");
                                                }
                                            } else {
                                                res.send("Missing ratingCount field");
                                            }
                                        } else {
                                            res.send("Missing rating field");
                                        }
                                    } else {
                                        res.send("Missing platforms field");
                                    }
                                } else {
                                    res.send("Missing name field");
                                }
                            } else {
                                res.send("Missing genres field");
                            }
                        } else {
                            res.send("Missing franchise field");
                        }
                    } else {
                        res.send("Missing firstReleaseDate field");
                    }
                } else {
                    res.send("Missing description field");
                }
            } else {
                res.send("Missing coverURL field");
            }
        } else {
            res.send("Missing ageRatings field");
        }
    } else {
        res.send("Missing gameID field");
    }
})

app.listen(port, () => {
    console.log("Server live @ http://localhost:" + port);
})