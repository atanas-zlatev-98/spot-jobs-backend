import { ObjectType, Field } from 'type-graphql';
import { ObjectId } from 'mongodb'
import { prop as Prop, getModelForClass, modelOptions, Severity } from '@typegoose/typegoose';
import { JobApplication } from './job-application-entity';
import { UserCV } from './cv-entity';

@modelOptions({ options: { allowMixed: Severity.ALLOW } })

@ObjectType()
export class User {

    @Field()
    _id: ObjectId;

    @Prop({ required: true })
    @Field()
    userFirstName: string;

    @Prop({ required: true })
    @Field()
    userLastName: string;

    @Prop({ required: true })
    @Field()
    email: string;

    @Prop({ required: true })
    @Field()
    userLocation: string;

    @Prop({ required: true })
    @Field()
    password: string;

    @Field(type => [JobApplication])
    @Prop({ default: [] })
    jobs?: JobApplication[]

    @Field(type => [UserCV])
    @Prop({ default: [] })
    cvs?: UserCV[]

}

export const UserModel = getModelForClass(User);