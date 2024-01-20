// import { Socket } from "socket.io";
// import http from "http";

// import express from 'express';
// import { Server } from 'socket.io';
// import { UserManager } from "./managers/UserManger";

// const app = express();
// const server = http.createServer(http);

// const io = new Server(server, {
//   cors: {
//     origin: "*"
//   }
// });

// const userManager = new UserManager();

// io.on('connection', (socket: Socket) => {
//   console.log('a user connected');
//   userManager.addUser("randomName", socket);
//   socket.on("disconnect", () => {
//     console.log("user disconnected");
//     userManager.removeUser(socket.id);
//   })
// });

// server.listen(5000, () => {
//     console.log('listening on *:5000');
// });
// // server.listen("https://webrtc-backend-hvws.onrender.com", () => {
// //     console.log('listening on *:5000');
// // });

//////////////////////////////////////////////////////////////////////////////

import { Socket } from "socket.io";
import http from "http";
import express from 'express';
import { UserManager } from "./managers/UserManger";
import cors from 'cors';  // Import the cors middleware

const app = express();
const server = http.createServer(app);  // Pass the 'app' to createServer

const socketio = require('socket.io')

const ser = server.listen({ port: 5000},() => {
  console.log('listening on *:5000');
});
const io= socketio(ser ,{origin:'*'});
// const io = new Server(server, {
  
//   cors: {
//     origin: "*"

//   }
// });

const userManager = new UserManager();

app.use(cors());  // Enable CORS for all routes

io.on('connection', (socket: Socket) => {
  console.log('a user connected');
  userManager.addUser("randomName", socket);
  socket.on("disconnect", () => {
    console.log("user disconnected");
    userManager.removeUser(socket.id);
  })
});

// server.listen(5000, () => {
//   console.log('listening on *:5000');
// });
