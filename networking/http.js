const http = require("http");
const server = http.createServer();

let counter = 0;
let sockets = {};

server.on("connection", (socket) => {
  socket.id = counter++;


  console.log("Client connected");
  socket.write("Please type your name\n");

  socket.on("data", (data) => {
    if (!sockets[socket.id]) {
      socket.name = data.toString().trim();
      socket.write(`Welcome ${socket.name}\n`);
      sockets[socket.id] = socket;
      return;
    }
    Object.entries(sockets).forEach(([key,cs]) => {
      if(socket.id === key) return;
      cs.write(`${socket.id}: `);
      cs.write(data);
    });
  });

  socket.on("end", () => {
    delete sockets[sockets.id];
    console.log("Client disconnected");
  });
});

server.listen(8000, () => console.log("Server started"));
