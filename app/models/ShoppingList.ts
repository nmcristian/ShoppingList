import { Model, DataTypes, Association } from 'sequelize';

import { sequelize } from '../../config/Database';

import User from "./User";
import Item from "./Item";
import ShoppingListItem from "./ShoppingListItem"

class ShoppingList extends Model {
    public id: number;
    public userId: number;
    public name: string;
    public createdAt: Date;
    public readonly updatedAt: Date;

    public items: Array<Item>;
    public user: User;

    public static associations: {
        user: Association<ShoppingList, User>;
        items: Association<ShoppingList, Item>;
    };
}

ShoppingList.init(
    {
        id: {
            type: DataTypes.INTEGER,
            field: 'id',
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        userId: {
            type: DataTypes.INTEGER,
            field: 'user_id',
            references: {
                model: 'Users',
                key: 'id'
            },
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            field: 'name',
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
        scopes: {
            items: {
                include: [
                    {
                        model: Item,
                        as: 'items',
                        through: {
                            attributes: []
                        },
                        required: false
                    }
                ]
            }
        },
        sequelize,
        tableName: 'ShoppingLists',
        timestamps: true
    }
);

// relations

Item.belongsToMany(ShoppingList, { through: ShoppingListItem, foreignKey: 'item_id', otherKey: 'shopping_list_id', as: 'shoppingLists' })
ShoppingList.belongsToMany(Item, { through: ShoppingListItem, foreignKey: 'shopping_list_id', otherKey: 'item_id', as: 'items' })

export default ShoppingList;