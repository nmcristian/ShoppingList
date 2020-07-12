import * as express from 'express';
export const UsersRouter: express.Router = express.Router();

// validations:
import { validateAuthorizationToken } from './params_validators/AuthorizationTokenValidator';
import { validateSignupParams, validateSigninParams, validateUserIdParam } from './params_validators/UsersValidator';

import UsersController from '../controllers/UsersController';

// Create new user
UsersRouter.post('/signup', validateSignupParams, async (req: express.Request, res: express.Response) => {
    try {
        res.status(201).json(await new UsersController().signUp(req.body));

    } catch (err) {
        res.status(err.status || 500).send({
            message: err.message || "The request was not completed due to an internal error on the server side.",
            params: { "requestBody": req.body}
        });
    }
});

// Log in as user
UsersRouter.post('/signin', validateSigninParams, async (req: express.Request, res: express.Response) => {
    try {
        res.status(201).json(await new UsersController().signIn(req.body));

    } catch (err) {
        res.status(err.status || 500).send({
            message: err.message || "The request was not completed due to an internal error on the server side.",
            params: { "requestBody": req.body}
        });
    }
});

// GET user by id
UsersRouter.get('/:userId', validateUserIdParam, validateAuthorizationToken, async (req: express.Request, res: express.Response) => {
    try {
        res.status(200).json(await new UsersController().getUser(parseInt(req.params.userId), req.headers.authorization));

    } catch (err) {
        res.status(err.status || 500).send({
            message: err.message || "The request was not completed due to an internal error on the server side.",
            params: { "url": { "userId": req.params.userId } }
        });
    }
});

// GET all users
UsersRouter.get('/', validateAuthorizationToken, async (req: express.Request, res: express.Response) => {
    try {
        res.status(200).json(await new UsersController().getUsers(req.headers.authorization));

    } catch (err) {
        res.status(err.status || 500).send({
            message: err.message || "The request was not completed due to an internal error on the server side.",
            params: { "url": { "userId": req.params.userId } }
        });
    }
});
