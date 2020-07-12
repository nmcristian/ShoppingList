import ShoppingListsService from '../services/ShoppingListsService';
import {ShoppingListInterface} from "../interfaces/ShoppingListInterface";
import {ShoppingListItemInterface} from "../interfaces/ShoppingListItemInterface";
import Authorization from "../_helpers/Authorization";
import CustomError from "../_helpers/CustomError";

export default class ShoppingListsController {

    public async create(shoppingListData: ShoppingListInterface, bearerToken: string) {
        try {
            let user = await new Authorization().authorize(['User', 'Admin'], bearerToken);
            if (user.role === 'User' && user.id !== shoppingListData.userId) {
                throw new CustomError('You are not authorized to create resources for another user.', 401);
            }
            return await new ShoppingListsService().create(shoppingListData);
        } catch (err) {
            throw err;
        }
    }

    public async getById(id: number, bearerToken: string) {
        try {
            await new Authorization().authorizeResourceAccess(id, 'ShoppingList', bearerToken);
            return await new ShoppingListsService().getById(id);
        } catch (err) {
            throw err;
        }
    }

    public async getByUserId(id: number, bearerToken: string) {
        try {
            await new Authorization().authorizeResourceAccess(id, 'User', bearerToken);
            return await new ShoppingListsService().getByUserId(id);
        } catch (err) {
            throw err;
        }
    }

    public async update(shoppingListData: ShoppingListInterface, id: number, bearerToken: string) {
        try {
            await new Authorization().authorizeResourceAccess(id, 'ShoppingList', bearerToken);
            return await new ShoppingListsService().update(shoppingListData, id);
        } catch (err) {
            throw err;
        }
    }

    public async addOrUpdateItem(listItemData: ShoppingListItemInterface, bearerToken: string) {
        try {
            await new Authorization().authorizeResourceAccess(listItemData.shoppingListId, 'ShoppingList', bearerToken);
            return await new ShoppingListsService().addOrUpdateItem(listItemData);
        } catch (err) {
            throw err;
        }
    }

    public async removeItem(shoppingListId: number, listItemData: ShoppingListItemInterface, bearerToken: string) {
        try {
            await new Authorization().authorizeResourceAccess(shoppingListId, 'ShoppingList', bearerToken);
            return await new ShoppingListsService().removeItem(shoppingListId, listItemData.itemId);
        } catch (err) {
            throw err;
        }
    }

    public async delete(id: number, bearerToken: string) {
        try {
            await new Authorization().authorizeResourceAccess(id, 'ShoppingList', bearerToken);
            return await new ShoppingListsService().delete(id);
        } catch (err) {
            throw err;
        }
    }
}
