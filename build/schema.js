"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSchema = void 0;
const type_graphql_1 = require("type-graphql");
const user_resolver_1 = require("./resolvers/user/user-resolver");
const job_application_resolver_1 = require("../src/resolvers/job-application/job-application-resolver");
const typegoose_middleware_1 = require("./typegoose-middleware");
const path = __importStar(require("path"));
const mongodb_1 = require("mongodb");
const object_id_scalar_1 = require("./object-id.scalar");
const auth_resolver_1 = require("./resolvers/auth-resolvers/auth-resolver");
const cv_resolver_1 = require("./resolvers/cv-resolvers/cv-resolver");
const getSchema = async () => {
    const schema = await (0, type_graphql_1.buildSchema)({
        resolvers: [
            auth_resolver_1.AuthResolver,
            user_resolver_1.UserResolver,
            job_application_resolver_1.JobApplicationResolver,
            cv_resolver_1.UserCvResolver
        ],
        emitSchemaFile: path.resolve(__dirname, 'schema.gql'),
        globalMiddlewares: [typegoose_middleware_1.TypegooseMiddleware],
        scalarsMap: [{ type: mongodb_1.ObjectId, scalar: object_id_scalar_1.ObjectIdScalar }],
    });
    return schema;
};
exports.getSchema = getSchema;
