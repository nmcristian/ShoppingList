import ShoppingListsService from '../services/ShoppingListsService';
import {ShoppingListInterface} from "../interfaces/ShoppingListInterface";
import {ShoppingListItemInterface} from "../interfaces/ShoppingListItemInterface";

export default class ShoppingListsController {

    public async create(shoppingListData: ShoppingListInterface) {
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

    public async getByUserId(id: number) {
        try {
            return await new ShoppingListsService().getByUserId(id);
        } catch (err) {
            throw err;
        }
    }

    public async update(shoppingListData: ShoppingListInterface, id: number) {
        try {
            return await new ShoppingListsService().update(shoppingListData, id);
        } catch (err) {
            throw err;
        }
    }

    public async addOrUpdateItem(listItemData: ShoppingListItemInterface) {
        try {
            return await new ShoppingListsService().addOrUpdateItem(listItemData);
        } catch (err) {
            throw err;
        }
    }

    public async removeItem(shoppingListId: number, listItemData: ShoppingListItemInterface) {
        try {
            return await new ShoppingListsService().removeItem(shoppingListId, listItemData.itemId);
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
