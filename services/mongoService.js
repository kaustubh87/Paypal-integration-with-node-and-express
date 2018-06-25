var mongodb = require('mongodb');
var mongoService;

var connectionString = process.env.MongoConnectionString || 
    "mongodb://localhost:27017/paypaltesting";

var Connect = (cb) => {
    mongodb.connect(connectionString, (err, db) => {

        return cb(err, db, () => {
            db.close();
        });
    });
};


mongoService.create = (collectionName, createObj, cb) => {

    Connect((err, db, close) => {

        db.collection(collectionName).insert(createObj, (err, results) =>{
            cb(err, results);
            return close();
        });
    });
}
