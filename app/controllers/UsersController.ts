import UsersService from '../services/UsersService';

export default class UsersController {

    public async signUp(userData) {
        try {
            return await new UsersService().createUser(userData);
        } catch (err) {
            throw err;
        }
    }

    public async getUser(id: number) {
        try {
            return await new UsersService().getUser(id);
        } catch (err) {
            throw err;
        }
    }

    public async getUsers() {
        try {
            return await new UsersService().getUsers();
        } catch (err) {
            throw err;
        }
    }
}
