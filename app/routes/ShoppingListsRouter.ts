import * as express from 'express';
import ShoppingListsController from "../controllers/ShoppingListsController";
export const ShoppingListsRouter: express.Router = express.Router();

// validations:
import { validateAuthorizationToken } from './params_validators/AuthorizationTokenValidator';
import { validateCreateShoppingListParams, validateUpdateShoppingListParams, validateUpdateShoppingListItemParams, validateUpdateShoppingListItemIdParam, validateShoppingListIdParam } from './params_validators/ShoppingListsValidator';
import { validateUserIdParam } from './params_validators/UsersValidator'

// Create new ShoppingList
ShoppingListsRouter.post('/', validateCreateShoppingListParams, validateAuthorizationToken, async (req: express.Request, res: express.Response) => {
    try {
        res.status(201).json(await new ShoppingListsController().create(req.body, req.headers.authorization));

    } catch (err) {
        res.status(err.status || 500).send({
            message: err.message || "The request was not completed due to an internal error on the server side.",
            params: { "requestBody": req.body}
        });
    }
});

// GET a ShoppingList by id
ShoppingListsRouter.get('/:shoppingListId', validateShoppingListIdParam, validateAuthorizationToken, async (req: express.Request, res: express.Response) => {
    try {
        res.status(200).json(await new ShoppingListsController().getById(parseInt(req.params.shoppingListId), req.headers.authorization));

    } catch (err) {
        res.status(err.status || 500).send({
            message: err.message || "The request was not completed due to an internal error on the server side.",
            params: { "url": { "id": req.params.id } }
        });
    }
});

// GET all ShoppingLists for a User
ShoppingListsRouter.get('/user/:userId', validateUserIdParam, validateAuthorizationToken, async (req: express.Request, res: express.Response) => {
    try {
        res.status(200).json(await new ShoppingListsController().getByUserId(parseInt(req.params.userId), req.headers.authorization));

    } catch (err) {
        res.status(err.status || 500).send({
            message: err.message || "The request was not completed due to an internal error on the server side.",
            params: { "url": { "userId": req.params.userId } }
        });
    }
});

// Update a ShoppingList
ShoppingListsRouter.put('/:shoppingListId', validateUpdateShoppingListParams, validateShoppingListIdParam, validateAuthorizationToken, async (req: express.Request, res: express.Response) => {
    try {
        res.status(200).json(await new ShoppingListsController().update(req.body, parseInt(req.params.shoppingListId), req.headers.authorization));

    } catch (err) {
        res.status(err.status || 500).send({
            message: err.message || "The request was not completed due to an internal error on the server side.",
            params: { "requestBody": req.body, "url": { "id": req.params.id } }
        });
    }
});

// Add item to the ShoppingList or update its quantity
ShoppingListsRouter.put('/:shoppingListId/add_item', validateShoppingListIdParam, validateUpdateShoppingListItemParams, validateAuthorizationToken, async (req: express.Request, res: express.Response) => {
    try {
        res.status(200).json(await new ShoppingListsController().addOrUpdateItem(
            {
                shoppingListId: parseInt(req.params.shoppingListId),
                itemId: parseInt(req.body.itemId),
                quantity: parseInt(req.body.quantity)
            },
            req.headers.authorization
        ));

    } catch (err) {
        res.status(err.status || 500).send({
            message: err.message || "The request was not completed due to an internal error on the server side.",
            params: { "requestBody": req.body, "url": { "shoppingListId": req.params.shoppingListId } }
        });
    }
});

// Remove item from the ShoppingList
ShoppingListsRouter.delete('/:shoppingListId/remove_item',  validateShoppingListIdParam, validateUpdateShoppingListItemIdParam, validateAuthorizationToken, async (req: express.Request, res: express.Response) => {
    try {
        res.status(200).json(await new ShoppingListsController().removeItem(parseInt(req.params.shoppingListId), req.body, req.headers.authorization));

    } catch (err) {
        res.status(err.status || 500).send({
            message: err.message || "The request was not completed due to an internal error on the server side.",
            params: { "requestBody": req.body, "url": { "shoppingListId": req.params.shoppingListId } }
        });
    }
});

// DELETE a ShoppingList by id
ShoppingListsRouter.delete('/:shoppingListId', validateShoppingListIdParam, validateAuthorizationToken, async (req: express.Request, res: express.Response) => {
    try {
        res.status(200).json(await new ShoppingListsController().delete(parseInt(req.params.shoppingListId), req.headers.authorization));

    } catch (err) {
        res.status(err.status || 500).send({
            message: err.message || "The request was not completed due to an internal error on the server side.",
            params: { "url": { "id": req.params.id } }
        });
    }
});
