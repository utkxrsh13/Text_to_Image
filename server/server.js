import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDb from "./config/mongodb.js";
import userRouter from "./routes/userRoute.js";

const PORT = process.env.PORT || 4000;
const app = express();

app.use(express.json());
app.use(cors());
await connectDb();

app.use("/api/users", userRouter);
app.get("/", (req, res) => res.send("API working"));

app.listen(PORT, () => console.log(`Server Running on port: ${PORT}`));
