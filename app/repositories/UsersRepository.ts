
import User from "../models/User";

export default class UsersRepository {

    public async save(user: User) {
        return await user.save();
    }

    public async getById(id: number) {
        return await User.scope([
            'shoppingLists'
        ]).findOne({
            where: {
                id: id
            }
        });
    }

    public async getUsers() {
        return await User.findAll({
            attributes: ['id', 'firstName', 'lastName', 'email', 'createdAt', 'updatedAt']
        });
    }
}
