// MongoDB と接続する

var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://junglejava:count0123@alex.mongohq.com:10073/mongohq');

// モデルの定義

var Schema = mongoose.Schema;

var MsgSchema = new Schema({
    date: {type: Date, default: Date.now},
    message: String
});

// モデルへのアクセス

var MsgModel = db.model("messages", MsgSchema);

// ドキュメント読み取り

MsgModel.find({}, function(err, docs) {
  console.log('length:',docs.length);
  for (var i = 0, size = docs.length; i < size; ++i) {
    console.log('id:', docs[i]._id,'     message:', docs[i].message);
  }
  mongoose.disconnect();
});


