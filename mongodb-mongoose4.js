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

// ドキュメント削除

MsgModel.remove({message: 'CAT'}, function(err) {
    console.log("removed");
    mongoose.disconnect();
});
