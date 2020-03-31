import { IApp, ICreateAppInput, IModels } from '../../interfaces';

export default {
    Query: {
        getApps: (_: object, _args: object, { models }: { models: IModels }): IApp[] => {
            return models.App.findAll();
        }
    },
    Mutation: {
        createApp: (_: object, { input }: { input: ICreateAppInput }, { models }: { models: IModels }): IApp => models.App.create({ ...input })
    }
};