import ItemsService from '../services/ItemsService';

export default class ShoppingListsController {

    public async create(itemData) {
        try {
            return await new ItemsService().create(itemData);
        } catch (err) {
            throw err;
        }
    }

    public async getById(id: number) {
        try {
            return await new ItemsService().getById(id);
        } catch (err) {
            throw err;
        }
    }

    public async getAll() {
        try {
            return await new ItemsService().getAll();
        } catch (err) {
            throw err;
        }
    }

    public async update(itemData, id: number) {
        try {
            return await new ItemsService().update(itemData, id);
        } catch (err) {
            throw err;
        }
    }

    public async delete(id: number) {
        try {
            return await new ItemsService().delete(id);
        } catch (err) {
            throw err;
        }
    }
}
