import * as express from 'express';
import ItemsController from "../controllers/ItemsController"
export const ItemsRouter: express.Router = express.Router();

// validations:
import { validateAuthorizationToken } from './params_validators/AuthorizationTokenValidator';
import { validateCreateItemParams, validateUpdateItemParams, validateItemIdParam } from './params_validators/ItemsValidator';

// Create new Item
ItemsRouter.post('/', validateCreateItemParams, validateAuthorizationToken, async (req: express.Request, res: express.Response) => {
    try {
        res.status(201).json(await new ItemsController().create(req.body, req.headers.authorization));

    } catch (err) {
        res.status(err.status || 500).send({
            message: err.message || "The request was not completed due to an internal error on the server side.",
            params: { "requestBody": req.body}
        });
    }
});

// GET an Item by id
ItemsRouter.get('/:id', validateItemIdParam, validateAuthorizationToken, async (req: express.Request, res: express.Response) => {
    try {
        res.status(200).json(await new ItemsController().getById(parseInt(req.params.id), req.headers.authorization));

    } catch (err) {
        res.status(err.status || 500).send({
            message: err.message || "The request was not completed due to an internal error on the server side.",
            params: { "url": { "id": req.params.id } }
        });
    }
});

// GET all Items
ItemsRouter.get('/', validateAuthorizationToken, async (req: express.Request, res: express.Response) => {
    try {
        res.status(200).json(await new ItemsController().getAll(req.headers.authorization));

    } catch (err) {
        res.status(err.status || 500).send({
            message: err.message || "The request was not completed due to an internal error on the server side.",
            params: {}
        });
    }
});

// Update an Item
ItemsRouter.put('/:id', validateUpdateItemParams, validateItemIdParam, validateAuthorizationToken, async (req: express.Request, res: express.Response) => {
    try {
        res.status(200).json(await new ItemsController().update(req.body, parseInt(req.params.id), req.headers.authorization));

    } catch (err) {
        res.status(err.status || 500).send({
            message: err.message || "The request was not completed due to an internal error on the server side.",
            params: { "requestBody": req.body, "url": { "id": req.params.id } }
        });
    }
});

// GET an Item by id
ItemsRouter.delete('/:id', validateItemIdParam, validateAuthorizationToken, async (req: express.Request, res: express.Response) => {
    try {
        res.status(200).json(await new ItemsController().delete(parseInt(req.params.id), req.headers.authorization));

    } catch (err) {
        res.status(err.status || 500).send({
            message: err.message || "The request was not completed due to an internal error on the server side.",
            params: { "url": { "id": req.params.id } }
        });
    }
});
