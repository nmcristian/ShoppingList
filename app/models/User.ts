import { Model, DataTypes, Association } from 'sequelize';

import { sequelize } from '../../config/Database';

import ShoppingList from "./ShoppingList";

class User extends Model {
    public id: number;
    public firstName: string;
    public lastName: string;
    public email: string;
    public password: string;
    public createdAt: Date;
    public readonly updatedAt: Date;

    public shoppingLists: Array<ShoppingList>;

    public static associations: {
        shoppingLists: Association<User, ShoppingList>;
    };
}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            field: 'id',
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        firstName: {
            type: DataTypes.STRING,
            field: 'first_name',
            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING,
            field: 'last_name',
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            field: 'email',
            unique: true,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            field: 'password',
            allowNull: false
        },
        role: {
            type: DataTypes.STRING,
            field: 'role',
            allowNull: false,
            defaultValue: 'User',
            validate: {
                isIn: [['Admin', 'User']]
            }
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
            shoppingLists: {
                include: [
                    {
                        model: ShoppingList,
                        as: 'shoppingLists',
                        required: false
                    }
                ]
            }
        },
        sequelize,
        tableName: 'Users',
        timestamps: true
    }
);

// relations

User.hasMany(ShoppingList, { sourceKey: 'id', foreignKey: 'user_id', as: 'shoppingLists' })
ShoppingList.belongsTo(User, { targetKey: 'id', foreignKey: 'user_id', as: 'user' })

export default User;