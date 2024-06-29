import express from 'express';
import 'dotenv/config';

const server = express();

server.get('/', (req, res) => {

    return res.send("Hello, Node!!");
})
server.post('/test', (req, res) => {

    return res.send("Post test!!");
})


export { server };