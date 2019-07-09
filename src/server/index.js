const app = require('http').createServer();
const io = (module.exports.io = require('socket.io')(app));

const PORT = process.env.PORT || 3231;

const SocketMangager = require('./SocketManager');

io.on('connection', SocketMangager);

app.listen(PORT, () => {
  console.log(`Connected to ${PORT}`);
});
