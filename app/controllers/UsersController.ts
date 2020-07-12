import UsersService from '../services/UsersService';
import {UserInterface} from "../interfaces/UserInterface";
import Authorization from "../_helpers/Authorization";
import {SignInInterface} from "../interfaces/SignInInterface";

export default class UsersController {

    public async signUp(userData: UserInterface) {
        try {
            userData.password = await new Authorization().hashPassword(userData.password);
            return await new UsersService().createUser(userData);
        } catch (err) {
            throw err;
        }
    }

    public async signIn(signInData: SignInInterface) {
        try {
            return await new Authorization().authenticate(signInData);

        } catch (err) {
            throw err;
        }
    }

    public async getUser(userId: number, bearerToken: string) {
        try {
            await new Authorization().authorizeResourceAccess(userId, 'User', bearerToken);
            return await new UsersService().getUser(userId);
        } catch (err) {
            throw err;
        }
    }

    public async getUsers(bearerToken: string) {
        try {
            await new Authorization().authorize(['Admin'], bearerToken);
            return await new UsersService().getUsers();
        } catch (err) {
            throw err;
        }
    }
}
