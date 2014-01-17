var MongoClient = require('mongodb').MongoClient,
    query = function (whenConnected) {
        MongoClient.connect('mongodb://127.0.0.1:27017/comments', function (err, db) {

            if (err) throw err;
            whenConnected(db);
        });
    },
    isValid = function (data) {
        return typeof data === 'string' && data.length > 0;
    };

exports.list = function (req, res) {

    query(function (db) {
        db.collection('comments').find().toArray(function (err, comments) {
            if (err) throw err;
            db.close();
            res.json(comments);
        });
    });
};

exports.save = function (req, res) {

    if (!isValid(req.body.author) || !isValid(req.body.text)) {
        res.send(400, 'Invalid comment');
        return;
    }

    query(function (db) {
        var collection = db.collection('comments');
        collection.insert(
            {
                author: req.body.author,
                text: req.body.text,
                created: +(new Date())
            },
            {},
            function (err) {
                if (err) console.error(err);
                db.close();
                exports.list(req, res);
            }
        );
    });
};
