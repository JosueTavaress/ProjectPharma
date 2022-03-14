import mongoose from "mongoose";

const BASE_URL = process.env.MONGODB_URI || "";
const database = mongoose.connect(BASE_URL);

export const getStatusMongoDB = async () => {
    await database;
    console.log("[ MONGO DB ] - ONLINE");
};

export default database;