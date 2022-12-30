module.exports = {
    async up(db, client) {
      await db.collection('tasks').updateMany( {}, { $set: { "status": "" } } );
      await db.collection('tasks').updateMany( { "estimatedTime": { $lte: 10 } }, { $set: { status: "in progress" } } );
      await db.collection('tasks').updateMany( { "estimatedTime": { $gt: 10 } }, { $set: { status: "done" } } );
    },
  
    async down(db, client) {
      db.collection('tasks').updateMany( {}, { $unset: { status: "" } } );
    }
  };