const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const server = express();

const authRouter = require('../auth/auth-router.js')
const usersRouter = require('../users/users-router.js')

server.use(express.json());
server.use(helmet());
server.use(cors(
    {
        credentials: true,
        origin: true,
    }
));

server.get('/', (req, res) => {
    res.send('<h1>API running!!!!! </h1>')
})

server.use('/api/', authRouter);
server.use('/api/', usersRouter);


module.exports = server;