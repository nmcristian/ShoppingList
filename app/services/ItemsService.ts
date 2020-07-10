import ItemsRepository from '../repositories/ItemsRepository';
import Item from "../models/Item";
import {ItemInterface} from "../interfaces/ItemInterface";

export default class ItemsService {

    public async create(itemData: ItemInterface) {
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

    public async update(itemData: ItemInterface, id: number) {
        try {
            return await new ItemsRepository().update(itemData, id);
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
