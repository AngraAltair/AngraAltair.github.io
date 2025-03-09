const net = require('net');

function zeroFill(num) {
  return (num < 10 ? '0' : '') + num;
}

const server = net.createServer((socket) => {
  const now = new Date();
  const formattedTime = `${now.getFullYear()}-${zeroFill(now.getMonth() + 1)}-${zeroFill(now.getDate())} ${zeroFill(now.getHours())}:${zeroFill(now.getMinutes())}\n`;

  socket.end(formattedTime);
});

server.listen(process.argv[2]);