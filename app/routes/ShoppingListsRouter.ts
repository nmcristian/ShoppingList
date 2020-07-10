import * as express from 'express';
import ShoppingListsController from "../controllers/ShoppingListsController";
export const ShoppingListsRouter: express.Router = express.Router();

// Create new ShoppingList
ShoppingListsRouter.post('/', async (req: express.Request, res: express.Response) => {
    try {
        res.status(201).json(await new ShoppingListsController().create(req.body));

    } catch (err) {
        res.status(err.status || 500).send({
            message: err.message || "The request was not completed due to an internal error on the server side.",
            params: { "requestBody": req.body}
        });
    }
});

// GET a ShoppingList by id
ShoppingListsRouter.get('/:id', async (req: express.Request, res: express.Response) => {
    try {
        res.status(200).json(await new ShoppingListsController().getById(parseInt(req.params.id)));

    } catch (err) {
        res.status(err.status || 500).send({
            message: err.message || "The request was not completed due to an internal error on the server side.",
            params: { "url": { "id": req.params.id } }
        });
    }
});

// GET all ShoppingLists for a User
ShoppingListsRouter.get('/user/:userId', async (req: express.Request, res: express.Response) => {
    try {
        res.status(200).json(await new ShoppingListsController().getByUserId(parseInt(req.params.userId)));

    } catch (err) {
        res.status(err.status || 500).send({
            message: err.message || "The request was not completed due to an internal error on the server side.",
            params: { "url": { "userId": req.params.userId } }
        });
    }
});

// Update a ShoppingList
ShoppingListsRouter.put('/:id', async (req: express.Request, res: express.Response) => {
    try {
        res.status(200).json(await new ShoppingListsController().update(req.body, parseInt(req.params.id)));

    } catch (err) {
        res.status(err.status || 500).send({
            message: err.message || "The request was not completed due to an internal error on the server side.",
            params: { "requestBody": req.body, "url": { "id": req.params.id } }
        });
    }
});

// Add item to the ShoppingList or update its quantity
ShoppingListsRouter.put('/:shoppingListId/add_item', async (req: express.Request, res: express.Response) => {
    try {
        res.status(200).json(await new ShoppingListsController().addOrUpdateItem({
            shoppingListId: parseInt(req.params.shoppingListId),
            itemId: parseInt(req.body.itemId),
            quantity: parseInt(req.body.quantity)
        }));

    } catch (err) {
        res.status(err.status || 500).send({
            message: err.message || "The request was not completed due to an internal error on the server side.",
            params: { "requestBody": req.body, "url": { "shoppingListId": req.params.shoppingListId } }
        });
    }
});

// Remove item from the ShoppingList
ShoppingListsRouter.delete('/:shoppingListId/remove_item', async (req: express.Request, res: express.Response) => {
    try {
        res.status(200).json(await new ShoppingListsController().removeItem(parseInt(req.params.shoppingListId), req.body));

    } catch (err) {
        res.status(err.status || 500).send({
            message: err.message || "The request was not completed due to an internal error on the server side.",
            params: { "requestBody": req.body, "url": { "shoppingListId": req.params.shoppingListId } }
        });
    }
});

// DELETE a ShoppingList by id
ShoppingListsRouter.delete('/:id', async (req: express.Request, res: express.Response) => {
    try {
        res.status(200).json(await new ShoppingListsController().delete(parseInt(req.params.id)));

    } catch (err) {
        res.status(err.status || 500).send({
            message: err.message || "The request was not completed due to an internal error on the server side.",
            params: { "url": { "id": req.params.id } }
        });
    }
});
