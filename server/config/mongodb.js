import mongoose from "mongoose";

const connectDb = async () => {
  try {
    mongoose.connection.on("connected", () => {
      console.log("Database Connected");
    });

    await mongoose.connect(`${process.env.MONGODB_URI}/InspiraPix`);
  } catch (error) {
    console.error("Database connection error:", error.message);
    process.exit(1); // Exit the app if DB connection fails
  }
};

export default connectDb;
