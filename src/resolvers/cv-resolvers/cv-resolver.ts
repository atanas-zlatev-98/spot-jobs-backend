import { Resolver, Query, Mutation, Arg } from "type-graphql";
import { UserCV, UserCVModel } from "../../entity/cv-entity";
import { UserCVArguments } from "./cv-arguments";
import { UserCVArgumentsEdit } from "./cv-edit";

@Resolver()
export class UserCvResolver {

    @Query(returns => [UserCV])
    async getAllCVs(): Promise<UserCV[]> {
        return await UserCVModel.find({})
    }

    @Query(returns => UserCV)
    async getCVbyID(@Arg("_id") _id: string): Promise<UserCV> {
        return await UserCVModel.findById(_id);
    }

    @Mutation(returns => UserCV)
    async createNewCv(@Arg("data") data: UserCVArguments): Promise<UserCV> {
        const newCv = new UserCVModel(data);
        await newCv.save();
        return newCv
    }


    @Mutation(returns => UserCV)
    async deleteCv(@Arg("_id") _id: string): Promise<UserCV> {
        return await UserCVModel.findByIdAndRemove(_id);
    }

    @Mutation(returns => UserCV)
    async editCv(@Arg("_id") _id: string, @Arg("data") data: UserCVArgumentsEdit): Promise<UserCV> {
        return await UserCVModel.findByIdAndUpdate(_id, data, { new: true });
    }

}