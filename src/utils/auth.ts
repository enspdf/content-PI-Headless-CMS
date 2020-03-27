import jwt from "jsonwebtoken";
import { AuthenticationError } from "apollo-server";
import { encrypt, setBase64, isPasswordMatch } from "fogg-utils";
import { IUser, IModels, IAuthPayload } from "../interfaces";
import { $security } from "../../config";

export const createToken = async (user: IUser): Promise<string[]> => {
    const { id, username, password, email, privilege, active } = user;
    const token = setBase64(`${encrypt($security.secretKey)}${password}`);

    const userData = {
        id,
        username,
        email,
        privilege,
        active,
        token
    };

    const createTk = jwt.sign({ data: setBase64(userData) }, $security.secretKey, { expiresIn: $security.expiresIn });

    return Promise.all([createTk]);
};

export const doLogin = async (email: string, password: string, models: IModels): Promise<IAuthPayload> => {
    const user = await models.User.findOne({
        where: { email },
        raw: true
    });

    if (!user) {
        throw new AuthenticationError("Invalid Login");
    }

    const passwordMatch = isPasswordMatch(encrypt(password), user.password);
    const isActive = user.active;

    if (!passwordMatch) {
        throw new AuthenticationError("Invalid Login");
    }

    if (!isActive) {
        throw new AuthenticationError("Your account is not activated yet");
    }

    const [token] = await createToken(user);

    return {
        token
    };
};