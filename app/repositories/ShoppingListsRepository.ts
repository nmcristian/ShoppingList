import ShoppingList from "../models/ShoppingList";
import ShoppingListItem from "../models/ShoppingListItem";

export default class ShoppingListsRepository {

    public async save(shoppingList: ShoppingList) {
        return await shoppingList.save();
    }

    public async getById(id: number) {
        return await ShoppingList.findOne({
            where: {
                id: id
            }
        });
    }

    public async getByUserId(userId: number) {
        return await ShoppingList.findAll({
            where: {
                userId: userId
            }
        });
    }

    public async update(shoppingListData, id: number) {
        return await ShoppingList.update(shoppingListData, {
            where: {id: id}
        });
    }

    public async findShoppingListItem(shoppingListId: number, itemId: number) {
        try {
            return await ShoppingListItem.findOne({
                where: {
                    shoppingListId: shoppingListId,
                    itemId: itemId
                }
            });
        } catch (err) {
            throw err;
        }
    }

    public async saveShoppingListItem(shoppingListItem: ShoppingListItem) {
        try {
            return await shoppingListItem.save();
        } catch (err) {
            throw err;
        }
    }

    public async removeItem(shoppingListId: number, itemId: number) {
        try {
            return await ShoppingListItem.destroy({
                where: {
                    shoppingListId: shoppingListId,
                    itemId: itemId
                }
            });
        } catch (err) {
            throw err;
        }
    }

    public async delete(id: number) {
        return await ShoppingList.destroy({
            where: {
                id: id
            }
        });
    }
}
