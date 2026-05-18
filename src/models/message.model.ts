import { desc } from "drizzle-orm";
import { db } from "../clients";
import { messages } from "../db/schema";

export const createMessage = async (
  sender_id: number,
  message: string
) => {
  return await db.insert(messages).values({
    sender_id,
    message,
  }).returning();
};

export const getMessage = async () => {
  return await db
    .select()
    .from(messages)
    .orderBy(desc(messages.created_at));
};