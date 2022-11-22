/**
 * 1. call https://jsonplaceholder.typicode.com/users and write it to file users.json
 * todo: install module to call this API, and use node FS module
 */
const fs = require('fs');
const axios = require('axios');

axios
    .get('https://jsonplaceholder.typicode.com/users')
    .then(res => {
        fs.writeFile('users.json', JSON.stringify(res.data), (err) => {
            if(err) console.log('Error')
        });
    })
    .catch(error => {
        console.error(error);
    });


