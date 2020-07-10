import * as bcrypt from 'bcrypt';

import UsersRepository from "../repositories/UsersRepository";

import User from "../models/User";

export default class UsersService {

    public async createUser(userData) {
        var newUser = User.build(userData);
        let salt = await bcrypt.genSalt(10);
        newUser.password = await bcrypt.hash(userData.password, salt);

        return new UsersRepository().save(newUser);
    }

    public async getUser(id: number) {
        return new UsersRepository().getById(id);
    }

    public async getUsers() {
        return new UsersRepository().getUsers();
    }
}
