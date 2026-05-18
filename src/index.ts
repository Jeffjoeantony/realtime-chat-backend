import express from "express";
import http from "http";
import { Server } from "socket.io";
import messageRoutes from "./routes/messages";
import { setupSocket } from "./socket/chat.socket";

const app = express();

app.use(express.json());
app.use("/api", messageRoutes);

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*",
  },
});
setupSocket(io);

app.get("/health", (req, res) => {
    res.send("OK")
})

server.listen(3000, () => {
  console.log("Server started on port 3000");
});