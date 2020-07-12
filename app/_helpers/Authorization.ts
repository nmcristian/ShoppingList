import * as jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { JWTInterface } from '../interfaces/JWTInterface';
import { SignInInterface } from '../interfaces/SignInInterface';
import CustomError from './CustomError'

import User from "../models/User";
import ShoppingList from "../models/ShoppingList";

export default class Authorization {

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
            if (!isPasswordMatchedWithHash) {
                throw new CustomError("Authorization issue - wrong username or password.", 401);
            }

            return { user: user.toJSON(), bearerToken: (isPasswordMatchedWithHash) ? await this.generateJwt(user.id) : null };
        }
        catch (err) {
            throw new CustomError(err.message, err.status || 401);
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

    public async authorize(roles: Array<string>, bearerToken: string) {
        try {
            let user = await this.authorizeUser(bearerToken);
            if (!roles.includes(user.role)) {
                throw new CustomError("You do not have enough permissions to access this resource.", 401);
            }
            return user;
        } catch (err) {
            throw new CustomError(err.message, err.status || 401);
        }
    }

    public async authorizeResourceAccess(resourceId: number, resourceType: string, bearerToken: string) {
        try {
            let user = await this.authorizeUser(bearerToken);
            if (user === null) {
                throw new CustomError("Authorization issue - user not found.", 404);
            }
            if (user.role === 'Admin') {
                return;
            }

            let ownsResource;
            switch(resourceType) {
                case 'User': {
                    ownsResource = (user.id === resourceId);
                    break;
                }
                case 'ShoppingList': {
                    let shoppingList = await ShoppingList.findOne({
                        where: {
                            id: resourceId
                        }
                    });
                    if (shoppingList) {
                        ownsResource = (user.id === shoppingList.userId);
                    } else {
                        throw new CustomError("ShoppingList not found.", 404);
                    }
                    ownsResource = (user.id === shoppingList.userId);
                    break;
                }
                case 'Item': {
                    ownsResource = true;
                    break;
                }
                default: {
                    ownsResource = false;
                    break;
                }
            }

            if (!ownsResource) {
                throw new CustomError("Not authorized to access this resource.", 401);
            }
        } catch (err) {
            throw new CustomError(err.message, err.status || 401);
        }
    }
}
