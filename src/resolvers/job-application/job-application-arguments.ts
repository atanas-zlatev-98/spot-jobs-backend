import { MaxLength, MinLength, Length } from "class-validator";
import { ObjectId } from "mongodb";
import { Field, InputType } from "type-graphql";

@InputType()
export class NewJobArguments {

    @Field()
    @MinLength(5)
    jobLogo: string;

    @Field()
    @MaxLength(50)
    jobTitle: string;

    @Field()
    @Length(2, 1000)
    jobDescription: string;

    @Field()
    @MaxLength(100)
    jobRequiredExpirience: string;

    @Field()
    @MaxLength(100)
    jobPosition: string;

    @Field()
    @MaxLength(10)
    jobSalary: string;

    @Field()
    @MaxLength(30)
    jobLocation: string;

}

@InputType()
export class JobInput extends NewJobArguments {
    @Field()
    _id: ObjectId;
}
