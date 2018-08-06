import io from 'socket.io';

const server = io(3000, {
  path: '/',
  serveClient: false,
});

server.on('connect', socket => {
  console.log('Client connected');

  socket.on('message', (message: any) => {
    console.log(`Message going through: ${JSON.stringify(message)}`);
    server.emit('message', message);
  });
});
