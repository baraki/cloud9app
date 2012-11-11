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

// ドキュメント更新

MsgModel.update({}, {$set: {message: 'Hello World!'}}, {upsert: false, multi: true}, function(err) {
    console.log("updated");
    mongoose.disconnect();
});
