
import { AuthenticationError, UserInputError } from "apollo-server-core";
import { Resolver, Query, Mutation, Args, Ctx } from "type-graphql";
import { User, UserModel } from "../../entity/user-entity";
import { UserLoginArguments } from "./login-arguments";
import { getToken } from "./token";
import bcryptjs from "bcryptjs"
import { Context } from "./context";


@Resolver()
export class AuthResolver {

    @Query(returns => User)
    async currentUser(@Ctx() ctx: Context): Promise<User> {
        if (!ctx.user) {
            throw new AuthenticationError('User is not authenticated!');
        }
        return await UserModel.findById(ctx.user._id)
    }

    @Mutation(returns => String)
    async login(@Args() { email, password }: UserLoginArguments) {

        const user = await UserModel.findOne({ email })

        if (!user) {
            throw new UserInputError('Wrong Login Credentials');
        }

        const isPasswordValid = await bcryptjs.compare(password, user.password)

        if (!isPasswordValid) {
            throw new UserInputError('Wrong Login Credentials');
        }

        await user.save();
        return getToken(user._id)
    }

}
