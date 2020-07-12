import * as express from 'express';
let Joi = require('@hapi/joi');


export function validateSignupParams (req: express.Request, res: express.Response, next: express.NextFunction) {
    Joi.validate(
        req.body, {
            firstName: Joi.string().min(1).required(),
            lastName: Joi.string().min(1).required(),
            email: Joi.string().trim().email({ minDomainSegments: 2 }).required(),
            password: Joi.string().regex(/^[a-zA-Z0-9]{6,30}$/).required()
        }, function (err, value) {
            if (err) {
                res.status(400).json({ message: "Parameters validation error occurred.", err: err });
            } else {
                next();
            }
        }
    );
}


export function validateSigninParams (req: express.Request, res: express.Response, next: express.NextFunction) {
    Joi.validate(
        req.body, {
            email: Joi.string().trim().email({ minDomainSegments: 2 }).required(),
            password: Joi.string().regex(/^[a-zA-Z0-9]{6,30}$/).required()
        }, function (err, value) {
            if (err) {
                res.status(400).json({ message: "Parameters validation error occurred.", err: err });
            } else {
                next();
            }
        }
    );
}


export function validateUserIdParam (req: express.Request, res: express.Response, next: express.NextFunction) {
    Joi.validate(
        req.params, {
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