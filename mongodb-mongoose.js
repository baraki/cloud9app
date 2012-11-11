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

// ドキュメント生成 (保存)

var Msg = new MsgModel();
Msg.message = "blurgh";

Msg.save(function(err){
  if(err){ 
    console.log("Error:", err);
  }else{
    console.log("saved");
    mongoose.disconnect();
  }
})
