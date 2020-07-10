import * as express from 'express';
import ItemsController from "../controllers/ItemsController"
export const ItemsRouter: express.Router = express.Router();

// Create new Item
ItemsRouter.post('/', async (req: express.Request, res: express.Response) => {
    try {
        res.status(201).json(await new ItemsController().create(req.body));

    } catch (err) {
        res.status(err.status || 500).send({
            message: err.message || "The request was not completed due to an internal error on the server side.",
            params: { "requestBody": req.body}
        });
    }
});

// GET an Item by id
ItemsRouter.get('/:id', async (req: express.Request, res: express.Response) => {
    try {
        res.status(200).json(await new ItemsController().getById(parseInt(req.params.id)));

    } catch (err) {
        res.status(err.status || 500).send({
            message: err.message || "The request was not completed due to an internal error on the server side.",
            params: { "url": { "id": req.params.id } }
        });
    }
});

// GET all Items
ItemsRouter.get('/', async (req: express.Request, res: express.Response) => {
    try {
        res.status(200).json(await new ItemsController().getAll());

    } catch (err) {
        res.status(err.status || 500).send({
            message: err.message || "The request was not completed due to an internal error on the server side.",
            params: {}
        });
    }
});

// Update an Item
ItemsRouter.put('/:id', async (req: express.Request, res: express.Response) => {
    try {
        res.status(200).json(await new ItemsController().update(req.body, parseInt(req.params.id)));

    } catch (err) {
        res.status(err.status || 500).send({
            message: err.message || "The request was not completed due to an internal error on the server side.",
            params: { "requestBody": req.body, "url": { "id": req.params.id } }
        });
    }
});

// GET an Item by id
ItemsRouter.delete('/:id', async (req: express.Request, res: express.Response) => {
    try {
        res.status(200).json(await new ItemsController().delete(parseInt(req.params.id)));

    } catch (err) {
        res.status(err.status || 500).send({
            message: err.message || "The request was not completed due to an internal error on the server side.",
            params: { "url": { "id": req.params.id } }
        });
    }
});
