import { Model, DataTypes, Association } from 'sequelize';

import { sequelize } from '../../config/Database';

import ShoppingList from "./ShoppingList";
import Item from "./Item"

class ShoppingListItem extends Model {
    public shoppingListId: number;
    public itemId: number;
    public readonly createdAt: Date;
    public readonly updatedAt: Date;

    public static associations: {
        shoppingList: Association<ShoppingListItem, ShoppingList>;
        item: Association<ShoppingListItem, Item>;
    };
}

ShoppingListItem.init(
    {
        shoppingListId: {
            type: DataTypes.INTEGER,
            field: 'shopping_list_id',
            primaryKey: true,
            references: {
                model: 'ShoppingLists',
                key: 'id'
            },
            allowNull: false
        },
        itemId: {
            type: DataTypes.INTEGER,
            field: 'item_id',
            primaryKey: true,
            references: {
                model: 'Items',
                key: 'id'
            },
            allowNull: false
        },
        createdAt: {
            type: DataTypes.DATE,
            field: 'created_at',
            defaultValue: Date.now(),
            allowNull: false
        },
        updatedAt: {
            type: DataTypes.DATE,
            field: 'updated_at',
            defaultValue: Date.now(),
            allowNull: false
        }

    }, {
        sequelize,
        tableName: 'ShoppingListItems',
        timestamps: true
    }
);

export default ShoppingListItem;