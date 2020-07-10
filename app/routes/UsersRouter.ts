import * as express from 'express';
export const UsersRouter: express.Router = express.Router();

import UsersController from '../controllers/UsersController';

UsersRouter.post('/signup', async (req: express.Request, res: express.Response) => {
    try {
        res.status(201).json(await new UsersController().signUp(req.body));

    } catch (err) {
        res.status(err.status || 500).send({
            message: err.message || "The request was not completed due to an internal error on the server side.",
            params: { "requestBody": req.body}
        });
    }
});

/* GET users listing. */
UsersRouter.get('/', function(req, res, next) {
    res.send('respond with a resource');
});
