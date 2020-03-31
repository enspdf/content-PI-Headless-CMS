import { Sequelize } from "sequelize";
import { hasKey } from "fogg-utils";
import { $db } from "../../config";
import { IModels } from "../interfaces";

const { dialect = "postgres", port, host, database, username, password } = $db;

const uri = `${dialect}://${username}:${password}@${host}:${port}/${database}`;
const sequelize = new Sequelize(uri);

const models: IModels = {
    App: sequelize.import("./App"),
    User: sequelize.import("./User"),
    sequelize
};

Object.keys(models).forEach((modelName: string) => {
    if (hasKey(models, modelName)) {
        if (models[modelName].associate) {
            models[modelName].associate(models);
        }
    }
});

export default models;