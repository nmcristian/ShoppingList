import * as express from 'express';
let Joi = require('@hapi/joi');


export function validateCreateItemParams (req: express.Request, res: express.Response, next: express.NextFunction) {
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


export function validateUpdateItemParams (req: express.Request, res: express.Response, next: express.NextFunction) {
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


export function validateItemIdParam (req: express.Request, res: express.Response, next: express.NextFunction) {
    Joi.validate(
        req.params, {
            id: Joi.number().min(1).required()
        }, function (err, value) {
            if (err) {
                res.status(400).json({ message: "Parameters validation error occurred.", err: err });
            } else {
                next();
            }
        }
    );
}