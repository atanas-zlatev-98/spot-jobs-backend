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
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditJob = void 0;
const class_validator_1 = require("class-validator");
const type_graphql_1 = require("type-graphql");
const job_application_arguments_1 = require("./job-application-arguments");
let EditJob = class EditJob {
};
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    (0, class_validator_1.MinLength)(5),
    __metadata("design:type", String)
], EditJob.prototype, "jobLogo", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    (0, class_validator_1.MaxLength)(50),
    __metadata("design:type", String)
], EditJob.prototype, "jobTitle", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    (0, class_validator_1.Length)(2, 1000),
    __metadata("design:type", String)
], EditJob.prototype, "jobDescription", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    (0, class_validator_1.MaxLength)(100),
    __metadata("design:type", String)
], EditJob.prototype, "jobRequiredExpirience", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    (0, class_validator_1.MaxLength)(100),
    __metadata("design:type", String)
], EditJob.prototype, "jobPosition", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    (0, class_validator_1.MaxLength)(10),
    __metadata("design:type", String)
], EditJob.prototype, "jobSalary", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    (0, class_validator_1.MaxLength)(30),
    __metadata("design:type", String)
], EditJob.prototype, "jobLocation", void 0);
__decorate([
    (0, type_graphql_1.Field)(type => [job_application_arguments_1.JobInput]),
    __metadata("design:type", Array)
], EditJob.prototype, "jobs", void 0);
EditJob = __decorate([
    (0, type_graphql_1.InputType)()
], EditJob);
exports.EditJob = EditJob;
