const app = require('./app');
const http = require('http');
const { PORT } = require('./utils/config/config.env');
const connectToDB = require('./db');

connectToDB();

const server = http.createServer(app);

server.listen(3005, () => {
  console.log(`Server running on port 3005`);
});
