import { Server, Socket } from "socket.io";
import { saveMessage } from "../services/message.service";

const onlineUsers = new Map<number, string>();

export const setupSocket = (io: Server) => {
  io.on("connection", (socket: Socket) => {
    console.log("User connected:", socket.id);

    // JOIN
    socket.on("join", (userId: number) => {
      onlineUsers.set(userId, socket.id);

      io.emit("online_users", Array.from(onlineUsers.keys()));

      console.log(`User ${userId} joined`);
    });

    // SEND MESSAGE
    socket.on(
      "send_message",
      async (data: { sender_id: number; message: string }) => {
        try {
          const savedMessage = await saveMessage(
            data.sender_id,
            data.message
          );

          io.emit("receive_message", savedMessage);
        } catch (error) {
          socket.emit("error_message", "Failed to save message");
        }
      }
    );

    // TYPING
    socket.on("typing", (userId: number) => {
      socket.broadcast.emit("typing", userId);
    });

    socket.on("stop_typing", (userId: number) => {
      socket.broadcast.emit("stop_typing", userId);
    });

    // DISCONNECT
    socket.on("disconnect", () => {
      for (const [userId, socketId] of onlineUsers.entries()) {
        if (socketId === socket.id) {
          onlineUsers.delete(userId);
          break;
        }
      }

      io.emit("online_users", Array.from(onlineUsers.keys()));

      console.log("User disconnected:", socket.id);
    });
  });
};