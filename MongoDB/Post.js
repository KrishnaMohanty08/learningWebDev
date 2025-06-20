const mongoose =require("mongoose");

const postSchema=new mongoose.Schema({
      id:Number ,
      title:String,
      body: String,
      tags: [ String ],
      reactions: {
        likes: {type:Number},
        dislikes: {type:Number},
      },
      views: Number,
      userId: Number,
      username: String
});
const Post =mongoose.models.Post || mongoose.model("Post", postSchema,"posts");

module.exports= Post;