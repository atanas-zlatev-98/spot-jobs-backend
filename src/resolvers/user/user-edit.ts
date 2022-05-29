import { MaxLength, MinLength, IsEmail } from "class-validator";
import { Field, InputType } from "type-graphql";
import { JobInput } from "../job-application/job-application-arguments";
import { CVInput } from "../cv-resolvers/cv-arguments";;
@InputType()
export class EditUserInput {

    @Field({ nullable: true })
    @MaxLength(30)
    userFirstName: string;

    @Field({ nullable: true })
    @MaxLength(30)
    userLastName?: string;

    @Field({ nullable: true })
    @IsEmail()
    email?: string;

    @Field({ nullable: true })
    @MinLength(3)
    userLocation?: string;

    @Field({ nullable: true })
    @MinLength(6)
    password?: string;

    @Field(type => [JobInput])
    jobs?: JobInput[]

    @Field(type => [CVInput])
    cvs?: CVInput[]
}