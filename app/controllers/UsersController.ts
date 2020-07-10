import User from '../models/User';

export default class UsersController {

    public async signUp(userData) {
        try {
            let user = User.build(userData);

            return user.save();

        } catch (err) {
            throw err;
        }
    }
}
