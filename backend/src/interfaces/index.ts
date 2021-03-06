import { App, User, Sequelize } from "./types";

export interface IDataTypes {
    UUID: string;
    UUIDV4(): string;
    STRING: string;
    BOOLEAN: boolean;
};

export interface IApp extends App, Sequelize {
    id: string;
    createdAt: Date;
    updatedAt: Date;
};

export interface ICreateAppInput extends App {

};

export interface IUser extends User, Sequelize {
    id: string;
    token?: string;
    createdAt?: Date;
    updatedAt?: Date;
};

export interface ICreateUserInput extends User {

};

export interface ILoginInput {
    email: string;
    password: string;
};

export interface IAuthPayload {
    token: string;
};

export interface IModels {
    App: any;
    User: any;
    sequelize: any;
};