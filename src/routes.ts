// routes.ts

import express from 'express';

const routes = express.Router();

routes.get('/example', (req, res) => {
    res.send("It worked!");
});

export default routes;