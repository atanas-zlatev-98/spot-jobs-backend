import { buildSchema } from "type-graphql";
import { UserResolver } from "./resolvers/user/user-resolver";
import { JobApplicationResolver } from "./resolvers/job-application/job-application-resolver";
import { TypegooseMiddleware } from "./typegoose-middleware";
import * as path from 'path';
import { ObjectId } from "mongodb";
import { ObjectIdScalar } from "./object-id.scalar";
import { AuthResolver } from "./resolvers/auth-resolvers/auth-resolver";
import { UserCvResolver } from "./resolvers/cv-resolvers/cv-resolver";

export const getSchema = async () => {
    const schema = await buildSchema({
        resolvers: [
            AuthResolver,
            UserResolver,
            JobApplicationResolver,
            UserCvResolver

        ],
        emitSchemaFile: path.resolve(__dirname, 'schema.gql'),
        globalMiddlewares: [TypegooseMiddleware],
        scalarsMap: [{ type: ObjectId, scalar: ObjectIdScalar }],

    });
    return schema;
}