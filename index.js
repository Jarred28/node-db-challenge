const server = require("./server");

const PORT = 8282;

server.listen(PORT, () => {
  console.log(` === PORT: ${PORT} ===`);
});