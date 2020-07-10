import { Model, DataTypes, Association } from 'sequelize';

import { sequelize } from '../../config/Database';

import ShoppingList from "./ShoppingList";

class Item extends Model {
    public id: number;
    public name: string;
    public createdAt: Date;
    public readonly updatedAt: Date;

    public shoppingLists: Array<ShoppingList>;

    public static associations: {
        shoppingLists: Association<Item, ShoppingList>;
    };
}

Item.init(
    {
        id: {
            type: DataTypes.INTEGER,
            field: 'id',
            primaryKey: true,
            autoIncrement: true,
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
        sequelize,
        tableName: 'Items',
        timestamps: true
    }
);

export default Item;