import { Resolver, Query, Mutation, Arg } from "type-graphql";
import { User, UserModel } from "../../entity/user-entity";
import { CreateUserInput } from "./user-arguments";
import { EditUserInput } from '../user/user-edit';
import bcryptjs from "bcryptjs"

@Resolver()
export class UserResolver {

    @Query(returns => [User])
    async getAllUsers(): Promise<User[]> {
        return await UserModel.find({})
    }

    @Query(returns => User)
    async getUserById(@Arg("_id") _id: string): Promise<User> {
        return await UserModel.findById(_id);
    }

    @Mutation(returns => User)
    async createUser(@Arg("data") data: CreateUserInput): Promise<User> {
        const userData = { ...data, password: bcryptjs.hashSync(data.password, 10) }
        const newUser = new UserModel(userData);
        await newUser.save();
        return newUser
    }

    @Mutation(returns => User)
    async removeUser(@Arg("_id") _id: string): Promise<User> {

        const user = await UserModel.findByIdAndRemove(_id);
        return user;

    }

    @Mutation(returns => User)
    async editUser(@Arg("_id") _id: string, @Arg("data") data: EditUserInput): Promise<User> {
        const userData = data.password ? { ...data, password: bcryptjs.hashSync(data.password, 10) } : data
        return await UserModel.findByIdAndUpdate(_id, userData, { new: true });
    }
}