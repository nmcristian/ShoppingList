import ItemsService from '../services/ItemsService';
import {ItemInterface} from "../interfaces/ItemInterface";
import Authorization from "../_helpers/Authorization";

export default class ShoppingListsController {

    public async create(itemData: ItemInterface, bearerToken: string) {
        try {
            await new Authorization().authorize(['Admin'], bearerToken);
            return await new ItemsService().create(itemData);
        } catch (err) {
            throw err;
        }
    }

    public async getById(id: number, bearerToken: string) {
        try {
            await new Authorization().authorize(['User', 'Admin'], bearerToken);
            return await new ItemsService().getById(id);
        } catch (err) {
            throw err;
        }
    }

    public async getAll(bearerToken: string) {
        try {
            await new Authorization().authorize(['User', 'Admin'], bearerToken);
            return await new ItemsService().getAll();
        } catch (err) {
            throw err;
        }
    }

    public async update(itemData: ItemInterface, id: number, bearerToken: string) {
        try {
            await new Authorization().authorize(['Admin'], bearerToken);
            return await new ItemsService().update(itemData, id);
        } catch (err) {
            throw err;
        }
    }

    public async delete(id: number, bearerToken: string) {
        try {
            await new Authorization().authorize(['Admin'], bearerToken);
            return await new ItemsService().delete(id);
        } catch (err) {
            throw err;
        }
    }
}
