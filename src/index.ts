import express from "express"
import type { Request, Response } from "express"
import "dotenv/config";

const app = express();
app.use(express.json());

app.get("/health", (req,res) => {
    res.send("OK")
})

app.listen(3000, () => {
    console.log("Server started on port 3000")
})