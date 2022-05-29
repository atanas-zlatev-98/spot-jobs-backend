import { MinLength, IsEmail } from "class-validator";
import { Field, ArgsType } from "type-graphql";

@ArgsType()
export class UserLoginArguments {
    @Field()
    @IsEmail()
    email: string;

    @Field()
    @MinLength(6)
    password: string;
}