import ShoppingListsService from '../services/ShoppingListsService';

export default class ShoppingListsController {

    public async create(shoppingListData) {
        try {
            return await new ShoppingListsService().create(shoppingListData);
        } catch (err) {
            throw err;
        }
    }

    public async getById(id: number) {
        try {
            return await new ShoppingListsService().getById(id);
        } catch (err) {
            throw err;
        }
    }

    public async getByUserId(id) {
        try {
            return await new ShoppingListsService().getByUserId(id);
        } catch (err) {
            throw err;
        }
    }

    public async update(shoppingListData, id: number) {
        try {
            return await new ShoppingListsService().update(shoppingListData, id);
        } catch (err) {
            throw err;
        }
    }

    public async addOrUpdateItem(shoppingListId: number, listItemData) {
        try {
            return await new ShoppingListsService().addOrUpdateItem(shoppingListId, parseInt(listItemData.itemId), parseInt(listItemData.quantity));
        } catch (err) {
            throw err;
        }
    }

    public async removeItem(shoppingListId: number, listItemData) {
        try {
            return await new ShoppingListsService().removeItem(shoppingListId, parseInt(listItemData.itemId));
        } catch (err) {
            throw err;
        }
    }

    public async delete(id: number) {
        try {
            return await new ShoppingListsService().delete(id);
        } catch (err) {
            throw err;
        }
    }
}
