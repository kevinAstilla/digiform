import express from 'express';
import dotenv from "dotenv";
import loaders from "@/loaders";

dotenv.config();

const app = express();

loaders({ expressApp: app });


const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})