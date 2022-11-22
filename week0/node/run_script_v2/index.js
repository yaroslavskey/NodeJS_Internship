/**
 * 2. Let's work with running node script with some environment variables
 * todo: Pass parameter ENV when you run this script. 
 * If param is PRODUCTION  get data from https://jsonplaceholder.typicode.com/todos and write it to file todos.json
 * If param is DEV get data from https://jsonplaceholder.typicode.com/albums and write if to file albums.json
 */
require('dotenv').config();
const fs = require('fs');
const axios = require('axios');

const arg = process.argv;
const status = arg[2];

let url;
let file;

if(status == 'production') {
    url = process.env.PROD_URL;
    file = process.env.PROD_FILE;
}

if(status == 'dev') {
    url = process.env.DEV_URL;
    file = process.env.DEV_FILE;
}

axios
    .get(url)
    .then(res => {
        fs.writeFile(file, JSON.stringify(res.data), (err) => {
            if(err) console.log('Error')
        });
    });
       