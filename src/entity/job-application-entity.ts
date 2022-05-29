import { ObjectType, Field, InputType } from 'type-graphql';
import { ObjectId } from 'mongodb'
import { prop as Prop, getModelForClass } from '@typegoose/typegoose';

@InputType()
@ObjectType()
export class JobApplication {

    @Field()
    _id: ObjectId;

    @Prop({ required: true })
    @Field()
    jobLogo: string;

    @Prop({ required: true })
    @Field()
    jobTitle: string;

    @Prop({ required: true })
    @Field()
    jobDescription: string;

    @Prop({ required: true })
    @Field()
    jobRequiredExpirience: string;

    @Prop({ required: true })
    @Field()
    jobPosition: string;

    @Prop({ required: true })
    @Field()
    jobSalary: string;

    @Prop({ required: true })
    @Field()
    jobLocation: string;

}

export const JobApplicationModel = getModelForClass(JobApplication);