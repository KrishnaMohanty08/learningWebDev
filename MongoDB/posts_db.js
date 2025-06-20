const mongoose =require("mongoose");
const Post =require("./Post.js"); 

const MONGODB_URI = 'mongodb+srv://mohantykrishna57:YyeCX5o9ZULP6Xrf@fammy.6mszm3w.mongodb.net/Post';

const usernames = [
  "krish_123",
  "askshu_234",
  "chakshu_345",
  "archa_456",
  "fox2025",
  "golf007",
  "user789"
];

const connectAndUpdate = async () => {
  try {
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    console.log("✅ Connected to MongoDB");
    const posts = await Post.find({});

    for (let i = 0; i < posts.length; i++) {
      const assignedUser = usernames[i % usernames.length];
      posts[i].set({ username: assignedUser }); 
      await posts[i].save();
    }
    console.log("✅ Usernames assigned to all posts");
    
    const result=await Post.updateMany({},{$unset:{userId:1}})
    console.log(`✅ Removed userId from ${result.modifiedCount} posts`);

    await mongoose.disconnect();
  } catch (error) {
    console.error("❌ Error:", error);
  }
};

connectAndUpdate();
