import  mongoose  from "mongoose";

const postSchema=new mongoose.Schema({
    
      id:Number ,
      title:String,
      body: String,
      tags: [ String ],
      reactions: {
        likes: {type:Number,default:0},
        dislikes: {type:Number,default:0},
      },
      views: Number,
      userId: Number,
});
const Post =mongoose.models.Post || mongoose.model("Post", postSchema);

export default Post;