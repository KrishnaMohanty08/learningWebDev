import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;//"mongodb://localhost:27017/Posts";

if (!MONGODB_URI) {
  console.log("no uri");
  throw new Error("Please define URI");
}

const connectToDatabase = async () => {
  try {
    console.log("hi");
    await mongoose.connect(MONGODB_URI);
    console.log("Connected to Mongodb");
  } catch (error) {
    console.error("MongoDb connection error:", error);
    throw error;
  }
};

export default connectToDatabase;
