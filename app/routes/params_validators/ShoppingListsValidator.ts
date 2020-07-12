import * as express from 'express';
let Joi = require('@hapi/joi');


export function validateCreateShoppingListParams (req: express.Request, res: express.Response, next: express.NextFunction) {
    Joi.validate(
        req.body, {
            name: Joi.string().min(1).required(),
            userId: Joi.number().min(1).required()
        }, function (err, value) {
            if (err) {
                res.status(400).json({ message: "Parameters validation error occurred.", err: err });
            } else {
                next();
            }
        }
    );
}


export function validateUpdateShoppingListParams (req: express.Request, res: express.Response, next: express.NextFunction) {
    Joi.validate(
        req.body, {
            name: Joi.string().min(1).required()
        }, function (err, value) {
            if (err) {
                res.status(400).json({ message: "Parameters validation error occurred.", err: err });
            } else {
                next();
            }
        }
    );
}


export function validateUpdateShoppingListItemParams (req: express.Request, res: express.Response, next: express.NextFunction) {
    Joi.validate(
        req.body, {
            itemId: Joi.number().min(1).required(),
            quantity: Joi.number().min(1).required()
        }, function (err, value) {
            if (err) {
                res.status(400).json({ message: "Parameters validation error occurred.", err: err });
            } else {
                next();
            }
        }
    );
}


export function validateUpdateShoppingListItemIdParam (req: express.Request, res: express.Response, next: express.NextFunction) {
    Joi.validate(
        req.body, {
            itemId: Joi.number().min(1).required()
        }, function (err, value) {
            if (err) {
                res.status(400).json({ message: "Parameters validation error occurred.", err: err });
            } else {
                next();
            }
        }
    );
}


export function validateShoppingListIdParam (req: express.Request, res: express.Response, next: express.NextFunction) {
    Joi.validate(
        req.params, {
            shoppingListId: Joi.number().min(1).required()
        }, function (err, value) {
            if (err) {
                res.status(400).json({ message: "Parameters validation error occurred.", err: err });
            } else {
                next();
            }
        }
    );
}