import { MaxLength, MinLength, Length } from "class-validator";
import { Field, InputType } from "type-graphql";
import { JobInput } from "./job-application-arguments";

@InputType()
export class EditJob {

    @Field({ nullable: true })
    @MinLength(5)
    jobLogo?: string;

    @Field({ nullable: true })
    @MaxLength(50)
    jobTitle?: string;

    @Field({ nullable: true })
    @Length(2, 1000)
    jobDescription?: string;

    @Field({ nullable: true })
    @MaxLength(100)
    jobRequiredExpirience?: string;

    @Field({ nullable: true })
    @MaxLength(100)
    jobPosition?: string;

    @Field({ nullable: true })
    @MaxLength(10)
    jobSalary?: string;

    @Field({ nullable: true })
    @MaxLength(30)
    jobLocation?: string;

    @Field(type => [JobInput])
    jobs?: JobInput[]

}

