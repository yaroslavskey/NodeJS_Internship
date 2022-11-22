function find(id) {
    const userFind = users.find(user => user.id == id);

    return userFind;
}

/**
 *  Leave create service method for future, when we will connect mongo,
 *  we will do manipulations here
 */
function del(id) {
    const userDel = users.filter(user => user.id != id);

    return userDel;
}

function create(obj) {
    users.push(obj);

    return users;
}

function update(obj) {
    users.forEach((user) => {
        if (user.id == obj.id) {
            users.name = obj.name;
            users.username = obj.username;
            users.email = obj.email;

            return users;
        }
    });

    return obj
}

module.exports = {
    create,
    find,
    del,
    update,
};


const users = [
    {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
    },
    {
        "id": 2,
        "name": "Ervin Howell",
        "username": "Antonette",
        "email": "Shanna@melissa.tv",
    },
    {
        "id": 3,
        "name": "Clementine Bauch",
        "username": "Samantha",
        "email": "Nathan@yesenia.net",
    },
    {
        "id": 4,
        "name": "Patricia Lebsack",
        "username": "Karianne",
        "email": "Julianne.OConner@kory.org",
    },
    {
        "id": 5,
        "name": "Chelsey Dietrich",
        "username": "Kamren",
        "email": "Lucio_Hettinger@annie.ca",
    },
]

