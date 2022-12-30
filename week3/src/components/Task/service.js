const TasksDB = require('./taskShema');
const mongoose = require('mongoose');


async function find(userId, page) {
    const result = await TasksDB.find({assignee: userId}).skip(page*5).limit(5);
    const len = await TasksDB.find({assignee: userId}).count();

    return {res: result, len: len}
}

function findAll(data) {
    return result = TasksDB.aggregate(
        [
            {
                "$facet" : {
                    "tasks" : [
                        {
                            "$match" : {
                                "assignee" : mongoose.Types.ObjectId(data)
                            }
                        },
                        {
                            "$sort" : {
                                "estimatedTime" : -1.0
                            }
                        }
                    ]
                }
            }, 
            {
                "$sort" : {
                    "estimatedTime" : -1.0
                }
            },
            {
                "$lookup" : {
                    "from" : "users",
                    "localField" : "tasks.assignee",
                    "foreignField" : "_id",
                    "as" : "users"
                }
            }, 
            {
                "$unwind" : {
                    "path" : "$users"
                }
            }, 
            {
                "$addFields" : {
                    "name" : "$users.name"
                }
            }, 
            {
                "$unwind" : {
                    "path" : "$tasks"
                }
            }, 
            {
                "$group" : {
                    "_id" : null,
                    "name" : {
                        "$first" : "$name"
                    },
                    "totalEstimatedTime" : {
                        "$sum" : "$tasks.estimatedTime"
                    },
                    "totalTask" : {
                        "$sum" : 1.0
                    },
                    "tasks" : {
                        "$push" : "$tasks"
                    }
                }
            }
        ], 
        {
            "allowDiskUse" : false
        }
    );
}

function create(obj) {
    return TasksDB.create(obj);
}

function update(data) {
    return TasksDB.updateOne({ _id: data.taskId }, { estimatedTime: data.time })
}

module.exports = {
    create,
    find,
    findAll,
    update,
};