const UsersDB = require('./db');

function find(obj) {
    UsersDB.findOne({email: obj.email}, function (err, result) {
        console.log(err, result);

        return result; 
    })
}

function del(obj) {
    UsersDB.deleteOne({ email: obj.email }, function (err, result) {
        console.log(err, result);

        return result; 
    })
}

function create(obj) {
    UsersDB.create(obj, function (err, result) {
        console.log(err, result);

        return result; 
    });
}

function update(obj) {
    UsersDB.updateOne({ email: obj.email }, { name: obj.name, username: obj.username }, function (err, result) {
        console.log(err, result);

        return result;
    });
}

module.exports = {
    create,
    find,
    del,
    update,
};