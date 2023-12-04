const express = require('express');
const app = express();
const port = 8081;

app.use(express.json());

const knex = require('knex')(require('./knexfile.js')["development"])

const cors = require("cors");
const { add } = require('lodash');
const allowedOrigins = ["http://localhost:3000","http://localhost:8081", "http://localhost:3001"];

    app.use(
        cors({
            origin: function(origin, callback) {
                if (!origin) return callback(null, true);
                if (allowedOrigins.indexOf(origin) === -1) {
                    var msg =
                        "The CORS policy for this site does not " +
                        "allow access from the specified Origin.";
                    return callback(new Error(msg), false);
                }
                return callback(null, true);
            }
        })
    ); 


app.listen(port, ()=>{
    console.log(`Your Knex and Express application are running successfully on port ${port}`);
})

app.get('/', (req, res) =>{
    res.send(`Application up and running on port ${port}`)
})
