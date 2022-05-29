import { Request } from "express";
import { User } from "../../entity/user-entity";

export interface Context {

    req: Request,
    user: User,

}