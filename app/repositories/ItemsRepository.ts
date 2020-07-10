import Item from "../models/Item";

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

    public async update(itemData) {
        return await Item.update(itemData, {
            where: {id: itemData.id}
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
