import * as bcrypt from 'bcrypt';

import UsersRepository from "../repositories/UsersRepository";

import User from "../models/User";
import {UserInterface} from "../interfaces/UserInterface";

export default class UsersService {

    public async createUser(userData: UserInterface) {
        let newUser = User.build(userData);
        return new UsersRepository().save(newUser);
    }

    public async getUser(id: number) {
        return new UsersRepository().getById(id);
    }

    public async getUsers() {
        return new UsersRepository().getUsers();
    }
}
