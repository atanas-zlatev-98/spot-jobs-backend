import { MaxLength, IsEmail, Length } from "class-validator";
import { Field, InputType } from "type-graphql";

@InputType()
export class UserCVArgumentsEdit {

    @Field({ nullable: true })
    @Length(2, 30)
    first_name?: string;

    @Field({ nullable: true })
    @MaxLength(30)
    middle_name?: string;

    @Field({ nullable: true })
    @Length(2, 30)
    last_name?: string;

    @Field({ nullable: true })
    date_of_birth?: string;

    @Field({ nullable: true })
    @Length(2, 50)
    user_location?: string;

    @Field({ nullable: true })
    @IsEmail()
    user_email?: string;

    @Field({ nullable: true })
    @MaxLength(10)
    user_telephone?: string;

    @Field({ nullable: true })
    @Length(2, 40)
    user_proffesion?: string;

    @Field({ nullable: true })
    @Length(2, 100)
    user_education?: string;

}

