import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://mimimontmo2:jujube0809@rdvdb.ycbc4.mongodb.net/?retryWrites=true&w=majority&appName=RdvDb", {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("MongoDB Connected...");
    } catch (err) {
        console.error("MongoDB Connection Failed:", err);
        process.exit(1);
    }
};

export default connectDB;
