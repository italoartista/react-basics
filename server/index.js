// server.js

const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 5000 });
const clients = [];

function broadcastMessage(message) {
  clients.forEach(client => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(message);
    }
  });
}

wss.on('connection', ws => {
  clients.push(ws);

  ws.on('message', message => {
    broadcastMessage(message);
  });

  ws.on('close', () => {
    clients.splice(clients.indexOf(ws), 1);
  });
});

console.log('WebSocket chat server running on port 5000...');

