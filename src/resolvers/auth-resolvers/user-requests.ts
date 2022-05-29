import { User } from "../../entity/user-entity"
import { Request } from 'express'

declare module "express" {
    export interface Request {
        user: User
    }
}