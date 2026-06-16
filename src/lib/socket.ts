import { io } from 'socket.io-client';

// Since the server will run on the same origin (port 3000), we can just initialize without URL
export const socket = io(window.location.origin, {
  autoConnect: true,
});
