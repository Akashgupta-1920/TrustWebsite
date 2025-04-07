import mongoose from "mongoose";

const countSchema = new mongoose.Schema({
    totalVisitors: { type: Number, required: true, default: 0 }, 
    todayVisitors: { type: Number, required: true, default: 0 },
    lastUpdated: { type: Date, required: true, default: new Date() }
});

export default mongoose.model("Count", countSchema);
