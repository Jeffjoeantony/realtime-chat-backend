import { Request, Response } from "express";
import * as messageService from "../services/message.service";

export const sendMessage = async (req: Request, res: Response) => {
    try {
        const {sender_id,message} = req.body

        const result = await messageService.saveMessage(sender_id, message);

        res.status(201).json(result);

    } catch (err: any) {
        res.status(400).json({
            message: err.message
        })
    }
}
export const getAllMessage = async (req: Request, res: Response) => {
    try {
        const data = await messageService.fetchMessage();
        res.status(200).json(data)
        
    } catch (err) {
        res.status(500).json({
            err:"Internal server error"
        })
    }
}