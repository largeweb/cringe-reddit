// simple express server running on port 3000
const express = require('express'); //Line 1
const app = express(); //Line 2
const port = process.env.PORT || 5001; //Line 3
const fs = require('fs');
const exec = require('child_process').exec;
const { urlencoded } = require('express');
const cors = require("cors");
const dotenv = require('dotenv');
dotenv.config();

const OPENAI_API_KEY = process.env.API_KEY;

// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`)); //Line 6

// create a GET route
app.get('/', (req, res) => { //Line 9
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' }); //Line 10
});

//MIDDLEWARE
app.use(urlencoded({extended: true}))
app.use(cors())
app.use(express.json())
app.use(require('body-parser').json());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET');
  next();
});

app.post('/gpt-gen/', (req, res) => {
  let input = req.body.input;
  input = input.replace(/\n/g, " ");
  input = input.replace(/\'/g, " ");
    const scmd = './scripts/openai-request ' + OPENAI_API_KEY + " '" + input + "'";
    console.log(scmd);
    let output = "";
    exec(scmd, (err, stdout, stderr) => {
        if (err !== null) {
            console.log('exec error: ' + err);
        }
        console.log("FINISHED:")
        console.log(stdout)
        outputjsonstring = stdout;
        res.json(JSON.parse(outputjsonstring));
    });
});