"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JobApplicationResolver = void 0;
const type_graphql_1 = require("type-graphql");
const job_application_entity_1 = require("../../entity/job-application-entity");
const edit_job_application_1 = require("./edit-job-application");
const job_application_arguments_1 = require("./job-application-arguments");
let JobApplicationResolver = class JobApplicationResolver {
    async getAllJobs() {
        return await job_application_entity_1.JobApplicationModel.find({});
    }
    async getJobById(_id) {
        return await job_application_entity_1.JobApplicationModel.findById(_id);
    }
    async createJobApplication(data) {
        const newJobApplication = new job_application_entity_1.JobApplicationModel(data);
        await newJobApplication.save();
        return newJobApplication;
    }
    async deleteJobApplication(_id) {
        return await job_application_entity_1.JobApplicationModel.findByIdAndRemove(_id);
    }
    async editJobApplication(_id, data) {
        return await job_application_entity_1.JobApplicationModel.findByIdAndUpdate(_id, data, { new: true });
    }
};
__decorate([
    (0, type_graphql_1.Query)(returns => [job_application_entity_1.JobApplication]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], JobApplicationResolver.prototype, "getAllJobs", null);
__decorate([
    (0, type_graphql_1.Query)(returns => job_application_entity_1.JobApplication),
    __param(0, (0, type_graphql_1.Arg)("_id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], JobApplicationResolver.prototype, "getJobById", null);
__decorate([
    (0, type_graphql_1.Mutation)(returns => job_application_entity_1.JobApplication),
    __param(0, (0, type_graphql_1.Arg)("data")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [job_application_arguments_1.NewJobArguments]),
    __metadata("design:returntype", Promise)
], JobApplicationResolver.prototype, "createJobApplication", null);
__decorate([
    (0, type_graphql_1.Mutation)(returns => job_application_entity_1.JobApplication),
    __param(0, (0, type_graphql_1.Arg)("_id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], JobApplicationResolver.prototype, "deleteJobApplication", null);
__decorate([
    (0, type_graphql_1.Mutation)(returns => job_application_entity_1.JobApplication),
    __param(0, (0, type_graphql_1.Arg)("_id")),
    __param(1, (0, type_graphql_1.Arg)("data")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, edit_job_application_1.EditJob]),
    __metadata("design:returntype", Promise)
], JobApplicationResolver.prototype, "editJobApplication", null);
JobApplicationResolver = __decorate([
    (0, type_graphql_1.Resolver)()
], JobApplicationResolver);
exports.JobApplicationResolver = JobApplicationResolver;
