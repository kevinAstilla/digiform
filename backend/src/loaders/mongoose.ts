import mongoose from "mongoose";
import { type Db } from "mongodb"

const uri = "mongodb://localhost:27017/digiform";

export default async function mongooseLoader(): Promise<Db> {
    const connection = await mongoose.connect(uri, {})
    const db = connection.connection.db;
    if (!db) {
        throw new Error("MongoDB database not found");
    }
    return db;
}