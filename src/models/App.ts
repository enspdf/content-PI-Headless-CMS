import { IApp, IDataTypes } from "../interfaces";

export default (sequelize: any, DataTypes: IDataTypes): IApp => {
    const App = sequelize.define("App", {
        id: {
            primaryKey: true,
            allowNull: false,
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4()
        },
        appName: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        icon: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: true
        }
    });

    return App;
};