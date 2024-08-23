 import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.route.js";
import userRoutes from "./routes/user.route.js";
import { app, server } from "./socket/socket.js";

import cookieParser from "cookie-parser";
import messageRoutes from "./routes/message.route.js";
import connectToMongoDb from "./db/connectToMongoDB.js";

const PORT = process.env.PORT || 5000;
dotenv.config();

app.use(express.json()); // to parse the incoming requests with json payloads (from req.body)
app.use(cookieParser());


//app.get("/", (req,res) => {
//    // root route https://localhost:5000/
//    res.send("Hello World!!!!");
//
//});

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);


server.listen(PORT, () => {
    connectToMongoDb();
    console.log(`Server is running at port ${PORT}`)
});