const UsersDB = require('./userShema');

function find(obj) {
    return UsersDB.findOne({email: obj.email});
}

function del(obj) {
    return UsersDB.deleteOne({ email: obj.email });
}

function create(obj) {
  return UsersDB.create(obj);
}

function update(obj) {
    return UsersDB.updateOne({ email: obj.email }, { name: obj.name, username: obj.username });
}

module.exports = {
    create,
    find,
    del,
    update,
};