import { MaxLength, IsEmail } from "class-validator";
import { ObjectId } from "mongodb";
import { Field, InputType } from "type-graphql";

@InputType()
export class UserCVArguments {

    @Field()
    @MaxLength(30)
    first_name: string;

    @Field()
    @MaxLength(30)
    middle_name: string;

    @Field()
    @MaxLength(30)
    last_name: string;

    @Field()
    date_of_birth: string;

    @Field()
    @MaxLength(50)
    user_location: string;

    @Field()
    @IsEmail()
    user_email: string;


    @Field()
    @MaxLength(10)
    user_telephone: string;

    @Field()
    @MaxLength(40)
    user_proffesion: string;

    @Field()
    @MaxLength(100)
    user_education: string;

}

@InputType()
export class CVInput extends UserCVArguments {
    @Field()
    _id: ObjectId;

}