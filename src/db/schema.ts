import { pgTable, serial, integer, text, timestamp } from 'drizzle-orm/pg-core';

export const messages = pgTable('messages', {
  id: serial('id').primaryKey(),
  sender_id: integer('sender_id'),
  message: text('message').notNull(),
  created_at: timestamp('created_at').defaultNow(),
});