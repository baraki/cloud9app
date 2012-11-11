var mongo = require('mongodb'),
  Server = mongo.Server,
  Db = mongo.Db
  Collection = mongo.Collection;

var server = new Server('alex.mongohq.com', 10073, {});
var db = new Db('mongohq', server, {safe:false});

db.open(function(err, db) {
  if(!err) {
    console.log("opened");
    
    db.authenticate('junglejava', 'count0123', function(err) {
        console.log("authenticated");
        
        var collection = new Collection(db, 'messages');
        console.log("get collection");
        
        doc = {message: 'DOG', date: new Date('Thu Dec 29 2011 20:14:56 GMT-0600 (CST)')};
            
        collection.insert(doc, function() {
            console.log("insert success");
            db.close();
            console.log("closed");
        });       
    });    
    
  } else {
    console.log(err);
  }
});

