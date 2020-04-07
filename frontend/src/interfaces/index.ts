import { App, User } from "./types";

export interface IApp extends App {
    id: string;
    createdAt: Date;
    updatedAt: Date;
};

export interface IUser extends User {
    id?: string;
    token?: string;
    createdAt?: Date;
    updatedAt?: Date;
}