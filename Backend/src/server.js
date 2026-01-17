import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/connectDB.js";
import ApiError from "./utils/ApiError.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

const startServer = async () => {
    try {
        
        await connectDB();
        app.listen(port, () => {
            console.log(`Server listening on http://localhost:${port}`);
        });

    } catch (error) {
        console.error("Failed to start server:", error.message);
        process.exit(1);
    }
};

startServer();
