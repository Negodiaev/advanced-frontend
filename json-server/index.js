const fs = require('fs');
const jsonServer = require('json-server');
const path = require('path');

const server = jsonServer.create();
const router = jsonServer.router(path.resolve(__dirname, 'db.json'));

// some starting delay
server.use(async (req, res, next) => {
  await new Promise((res) => {
    setTimeout(res, 1000);
  });

  next();
});

// check the authorization header
// eslint-disable-next-line consistent-return
server.use((req, res, next) => {
  if (!req.header.authorization) {
    return res.status(403).json({ message: 'AUTH_ERROR' });
  }

  next();
});

server.use(jsonServer.defaults());
server.use(router);

// an endpoint for the login
server.post('/login', (req, res) => {
  const { username, password } = req.body;
  const db = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'db.json'), 'UTF-8'));
  const { users } = db;
  const userFormBd = users.find((user) => user.username === username && user.password === password);

  if (userFormBd) {
    return res.json(userFormBd);
  }

  return res.status(403).json({ message: 'AUTH ERROR' });
});

// run the server
server.listen(8000, () => {
  // eslint-disable-next-line no-console
  console.log('The server is running on the 8000 port');
});
