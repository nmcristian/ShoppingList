import ItemsRepository from '../repositories/ItemsRepository';
import Item from "../models/Item";

export default class ItemsService {

    public async create(itemData) {
        try {
            let newItem = Item.build(itemData);
            return await new ItemsRepository().save(newItem);
        } catch (err) {
            throw err;
        }
    }

    public async getById(id: number) {
        try {
            return await new ItemsRepository().getById(id);
        } catch (err) {
            throw err;
        }
    }

    public async getAll() {
        try {
            return await new ItemsRepository().getAll();
        } catch (err) {
            throw err;
        }
    }

    public async update(itemData, id: number) {
        try {
            itemData.id = id;
            return await new ItemsRepository().update(itemData);
        } catch (err) {
            throw err;
        }
    }

    public async delete(id: number) {
        try {
            return await new ItemsRepository().delete(id);
        } catch (err) {
            throw err;
        }
    }
}
