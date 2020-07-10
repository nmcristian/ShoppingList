import ShoppingListsRepository from '../repositories/ShoppingListsRepository';
import ShoppingList from "../models/ShoppingList";
import ItemsRepository from "../repositories/ItemsRepository";
import ShoppingListItem from "../models/ShoppingListItem";

export default class ShoppingListsService {

    public async create(shoppingListData) {
        try {
            let newShoppingList = ShoppingList.build(shoppingListData);
            return await new ShoppingListsRepository().save(newShoppingList);
        } catch (err) {
            throw err;
        }
    }

    public async getById(id: number) {
        try {
            return await new ShoppingListsRepository().getById(id);
        } catch (err) {
            throw err;
        }
    }

    public async getByUserId(id: number) {
        try {
            return await new ShoppingListsRepository().getByUserId(id);
        } catch (err) {
            throw err;
        }
    }

    public async update(shoppingListData, id: number) {
        try {
            return await new ShoppingListsRepository().update(shoppingListData, id);
        } catch (err) {
            throw err;
        }
    }

    public async addOrUpdateItem(shoppingListId: number, itemId: number, quantity: number) {
        try {
            // let shoppingList = await new ShoppingListsRepository().getById(shoppingListId);
            // shoppingList.addItem([await new ItemsRepository().getById(itemId), quantity]);

            let listItem = await new ShoppingListsRepository().findShoppingListItem(shoppingListId, itemId);
            if (listItem) {
                listItem.quantity = quantity;
            } else {
                listItem = ShoppingListItem.build({
                    shoppingListId: shoppingListId,
                    itemId: itemId,
                    quantity: quantity
                });
            }

            return await new ShoppingListsRepository().saveShoppingListItem(listItem);
        } catch (err) {
            throw err;
        }
    }

    public async removeItem(shoppingListId: number, itemId: number) {
        try {
            return await new ShoppingListsRepository().removeItem(shoppingListId, itemId);
        } catch (err) {
            throw err;
        }
    }

    public async delete(id: number) {
        try {
            return await new ShoppingListsRepository().delete(id);
        } catch (err) {
            throw err;
        }
    }
}
