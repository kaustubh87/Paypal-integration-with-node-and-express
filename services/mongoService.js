var mongodb = require('mongodb');

var connectionString = process.env.MongoConnectionString || 
    "mongodb://localhost:27017/paypaltesting";

var Connect = (cb) => {
    mongodb.connect(connectionString, (err, db) => {

        return cb(err, db, () => {
            db.close();
        });
    });
};