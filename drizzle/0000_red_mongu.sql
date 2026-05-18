CREATE TABLE "messages" (
	"id" serial PRIMARY KEY NOT NULL,
	"sender_id" integer,
	"message" text NOT NULL,
	"created_at" timestamp DEFAULT now()
);
