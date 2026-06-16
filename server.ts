import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import http from "http";
import { Server } from "socket.io";

async function startServer() {
  const app = express();
  const server = http.createServer(app);
  const io = new Server(server, {
    cors: {
      origin: "*",
    },
  });

  const PORT = 3000;

  // Real-time Socket.io logic
  io.on("connection", (socket) => {
    console.log("Client connected:", socket.id);

    // Initial dummy data for the first time someone connects to Admin
    socket.emit("initial_appointments", [
      { id: '1', patientName: 'Rahul Kumar', time: '10:00 AM, Today', type: 'Root Canal', status: 'Completed', phone: '9876543210' },
      { id: '2', patientName: 'Priya Sharma', time: '11:30 AM, Today', type: 'Consultation', status: 'Waiting', phone: '9876543211' }
    ]);

    socket.on("book_appointment", (data) => {
      console.log("New appointment request:", data);
      
      const newAppointment = {
        id: Date.now().toString(),
        patientName: data.name || "Unknown Patient",
        phone: data.phone || "No phone provided",
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) + ', Today',
        type: data.type || 'Consultation',
        status: 'Waiting'
      };

      // Broadcast to all clients (specifically admin)
      io.emit("new_appointment", newAppointment);
    });

    socket.on("disconnect", () => {
      console.log("Client disconnected:", socket.id);
    });
  });

  app.use(express.json());
  
  // API routes FIRST
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.join(process.cwd(), 'dist')));
    app.get('*', (req, res) => {
      res.sendFile(path.join(process.cwd(), 'dist', 'index.html'));
    });
  }

  server.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
