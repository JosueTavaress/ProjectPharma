require("dotenv").config();
import express from "express";
import { getStatusMongoDB } from "./model/connection";

const app = express();

app.use(express.json());

getStatusMongoDB();

app.listen(process.env.PORT || 3000, () => {
    console.log(`RUNNING IN http://localhost:${process.env.PORT}/`)
});