import { IUser, ICreateUserInput, IModels, ILoginInput, IAuthPayload } from "../../interfaces";
import { doLogin } from "../../utils/auth";

export default {
    Query: {
        getUsers: (_: object, _args: object, { models }: { models: IModels }): IUser[] => {
            return models.User.findAll();
        }
    },
    Mutation: {
        createUser: (_: object, { input }: { input: ICreateUserInput }, { models }: { models: IModels }): IUser => {
            return models.User.create({ ...input })
        },
        login: (_: object, { input }: { input: ILoginInput }, { models }: { models: IModels }): Promise<IAuthPayload> => {
            return doLogin(input.email, input.password, models);
        }
    }
};