import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.ATLAS_URL, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
