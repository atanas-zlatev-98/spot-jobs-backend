import { ObjectType, Field } from 'type-graphql';
import { ObjectId } from 'mongodb'
import { prop as Prop, getModelForClass } from '@typegoose/typegoose';

@ObjectType()
export class UserCV {

    @Field()
    _id: ObjectId;

    @Prop({ required: true })
    @Field()
    first_name: string;

    @Prop({ required: true })
    @Field()
    middle_name: string;

    @Prop({ required: true })
    @Field()
    last_name: string;

    @Prop({ required: true })
    @Field()
    date_of_birth: string;

    @Prop({ required: true })
    @Field()
    user_location: string;

    @Prop({ required: true })
    @Field()
    user_email: string;

    @Prop({ required: true })
    @Field()
    user_telephone: string;

    @Prop({ required: true })
    @Field()
    user_proffesion: string;

    @Prop({ required: true })
    @Field()
    user_education: string;



}

export const UserCVModel = getModelForClass(UserCV);