import { Resolver, Query, Mutation, Arg } from "type-graphql";
import { JobApplication, JobApplicationModel } from "../../entity/job-application-entity";
import { EditJob } from "./edit-job-application";
import { NewJobArguments } from "./job-application-arguments";

@Resolver()
export class JobApplicationResolver {

    @Query(returns => [JobApplication])
    async getAllJobs(): Promise<JobApplication[]> {
        return await JobApplicationModel.find({})
    }

    @Query(returns => JobApplication)
    async getJobById(@Arg("_id") _id: string): Promise<JobApplication> {
        return await JobApplicationModel.findById(_id);
    }

    @Mutation(returns => JobApplication)
    async createJobApplication(@Arg("data") data: NewJobArguments): Promise<JobApplication> {
        const newJobApplication = new JobApplicationModel(data);
        await newJobApplication.save();
        return newJobApplication
    }


    @Mutation(returns => JobApplication)
    async deleteJobApplication(@Arg("_id") _id: string): Promise<JobApplication> {
        return await JobApplicationModel.findByIdAndRemove(_id);
    }

    @Mutation(returns => JobApplication)
    async editJobApplication(@Arg("_id") _id: string, @Arg("data") data: EditJob): Promise<JobApplication> {
        return await JobApplicationModel.findByIdAndUpdate(_id, data, { new: true });
    }

}