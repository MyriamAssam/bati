import mongoose from "mongoose";

const RdvSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    description: String,
    date: Date,
    time: String,
    files: [String]
});

const Rdv = mongoose.model("Rdv", RdvSchema);
export default Rdv;
