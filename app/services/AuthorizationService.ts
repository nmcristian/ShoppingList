import * as jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { JWTInterface } from '../interfaces/JWTInterface';
import {SignInInterface} from "../interfaces/SignInInterface";

import User from "../models/User";

export default class AuthorizationService {

    public async hashPassword(password) {
        let salt = await bcrypt.genSalt(10);
        return await bcrypt.hash(password, salt);
    }

    public async generateJwt(userId: number, expiresin?: string) {
        let token = jwt.sign({
            userId: userId
        } as JWTInterface, process.env.JWT_SECRET || 'my_secret', {
            algorithm: 'HS256',
            expiresIn: expiresin || '30 days'
        });
        return token;
    }

    public async authenticate(signInData: SignInInterface) {
        try {
            let user = await User.findOne({
                where: {
                    email: signInData.email
                }
            });
            const isPasswordMatchedWithHash = await bcrypt.compare(signInData.password, user.password);
            return { bearerToken: (isPasswordMatchedWithHash) ? await this.generateJwt(user.id) : null };
        }
        catch (err) {
            throw new Error("error while comparing hash with a password");
        }
    }

    private async verifyToken(token) {
        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET || 'my_secret');
            return <JWTInterface>decoded;
        } catch (err) {
            console.log('err in verifyToken', err.message);
            if (err.message === 'jwt expired') {
                // when the token corresponds to a UserLoginSession, but exp. is in the past, it comes from jwt.verify()
                throw new CustomError("jwt expired", 401);
            } else {
                throw new CustomError(err.message || "jwt verfication err", 400);
            }
        }
    }

    public async authorizeUser(bearerToken: string) {
        try {
            if (bearerToken && bearerToken.split(' ')[0] === 'Bearer') {
                const decodedToken = await this.verifyToken(bearerToken.split(' ')[1]);
                if (decodedToken.userId) {
                    let user = await User.findOne({
                        where: {
                            id: decodedToken.userId
                        }
                    });
                    if (user) {
                        return user;
                    } else {
                        throw new CustomError("Authorization issue - user not found.", 404);
                    }
                } else {
                    throw new CustomError("Authorization issue.", 401);
                }
            } else {
                throw new CustomError("Authorization issue.", 401);
            }
        } catch (err) {
            throw new CustomError(err.message, err.status || 401);
        }
    }
}

export class CustomError extends Error {

    public status: number;

    constructor(message: string, status: number) {

        super(message);
        this.status = status;

    }
}
