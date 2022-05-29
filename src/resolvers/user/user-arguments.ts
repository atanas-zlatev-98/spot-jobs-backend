import { MaxLength, MinLength, IsEmail } from "class-validator";
import { ObjectId } from "mongodb";
import { Field, InputType } from "type-graphql";


@InputType()
export class CreateUserInput {
    @Field()
    @MaxLength(30)
    userFirstName: string;

    @Field()
    @MaxLength(30)
    userLastName: string;

    @Field()
    @IsEmail()
    email: string;

    @Field()
    @MinLength(3)
    userLocation: string;

    @Field()
    @MinLength(6)
    password: string;

}
