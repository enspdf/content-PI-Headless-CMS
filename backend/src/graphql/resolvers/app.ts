import { IApp, ICreateAppInput, IModels } from '../../interfaces';

export default {
    Query: {
        getApps: (_: object, _args: object, { models }: { models: IModels }): IApp[] => {
            return models.App.findAll();
        },
        getAppById: (_: object, { id }: { id: string }, { models }: { models: IModels }): IApp => {
            return models.App.findByPk(id);
        }
    },
    Mutation: {
        createApp: (_: object, { input }: { input: ICreateAppInput }, { models }: { models: IModels }): IApp => models.App.create({ ...input })
    }
};