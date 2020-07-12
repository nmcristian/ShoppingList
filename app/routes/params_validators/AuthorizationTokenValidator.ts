import * as express from 'express';
let Joi = require('@hapi/joi');

export function validateAuthorizationToken(req: express.Request, res: express.Response, next: express.NextFunction) {

    Joi.validate(
        req.headers, {
            authorization: Joi.string().required()
        }, {
            allowUnknown: true
        },
        function (err, value) {
            if (err) {
                res.status(400).json({ message: `Validation error occured ${err.details[0].message}` });
            } else {
                next();
            }
        }
    );
}
