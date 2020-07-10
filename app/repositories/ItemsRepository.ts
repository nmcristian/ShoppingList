import Item from "../models/Item";
import {ItemInterface} from "../interfaces/ItemInterface";
import ShoppingListItem from "../models/ShoppingListItem";

export default class ItemsRepository {

    public async save(item: Item) {
        return await item.save();
    }

    public async getById(id: number) {
        return await Item.findOne({
            where: {
                id: id
            }
        });
    }

    public async getAll() {
        return await Item.findAll();
    }

    public async update(itemData: ItemInterface, id: number) {
        return await Item.update(itemData, {
            where: {id: id}
        });
    }

    public async delete(id: number) {
        return await Item.destroy({
            where: {
                id: id
            }
        });
    }
}
