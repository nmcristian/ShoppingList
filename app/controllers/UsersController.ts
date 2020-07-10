import UsersService from '../services/UsersService';
import {UserInterface} from "../interfaces/UserInterface";
import AuthorizationService from "../services/AuthorizationService";
import {SignInInterface} from "../interfaces/SignInInterface";

export default class UsersController {

    public async signUp(userData: UserInterface) {
        try {
            userData.password = await new AuthorizationService().hashPassword(userData.password);
            return await new UsersService().createUser(userData);
        } catch (err) {
            throw err;
        }
    }

    public async signIn(signInData: SignInInterface) {
        try {
            return await new AuthorizationService().authenticate(signInData);

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
