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



app.get('/inventory', (req, res) =>{
    knex('item_table')
        .select('*')
        .then(data => {
            res.status(200).json(data);
        })
})

//Add Method (Create)

app.post('/inventory', async(req, res) =>{
    const maxIdQuery = await knex('item_table').max('item_id as maxId').first()

    await knex('item_table').insert({
        item_id: maxIdQuery.maxId + 1,
        userID: req.body.userID,
        item_Name: req.body.item_Name,
        description: req.body.description,
        quantity: req.body.quantity
    })
    .then(()=>{
        knex('item_table')
        .select('*')
        .then(data => {
            res.json(data);
        })
    })
})

//Delete Method (Delete)

app.delete('/inventory/:id', function(req,res){
    knex('item_table').where('item_id', req.params.id)
    .del()
    .then(()=>{
        knex('item_table')
        .select('*')
        .then(data => {
            res.json(data);
        })
    })
})

//update Method

app.put('/inventory/:id', (req,res) =>{
    knex('item_table').where('item_id', req.params.id)
        .update({
            userID: req.body.userID,
            item_Name: req.body.item_Name,
            description: req.body.description,
            quantity: req.body.quantity
        })
        .then(function(){
            knex('item_table')
            .select('*')
            .then(data =>{
                res.json(data);
            })
        })
})