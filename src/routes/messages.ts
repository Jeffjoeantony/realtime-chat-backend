import { Router } from "express";
import { db } from "../clients";
import { messages } from "../db/schema";

const router = Router();

router.post('/message', async (req,res) => {
    try {
        const {sender_id,message} = req.body;

        await db.insert(messages).values({
            sender_id,
            message
        })

        res.json({
            success: "true",
            message: "Message saved"
        })

    } catch (error) {
        console.log(error)

        res.status(500).json({
            success: false
        })
    }
})

export default router