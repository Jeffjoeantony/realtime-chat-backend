import * as messageModel from '../models/message.model';

export const saveMessage = async(sender_id: number, message: string) => {
    if(!message || !message.trim()){
        throw new Error("Message cannot be empty")
    }

    return await messageModel.createMessage(sender_id,message);
}

export const fetchMessage = async () => {
    return await messageModel.getMessage();
}