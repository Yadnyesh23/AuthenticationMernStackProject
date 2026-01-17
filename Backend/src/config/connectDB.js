import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);

        console.log(
            `Database connected successfully.\nDB Host: ${conn.connection.host}\nDB Name: ${conn.connection.name}`
        );
    } catch (error) {
        console.error("Database connection failed:", error.message);
        process.exit(1); 
    }
};

export default connectDB;
