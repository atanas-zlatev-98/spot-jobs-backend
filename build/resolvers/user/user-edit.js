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
exports.EditUserInput = void 0;
const class_validator_1 = require("class-validator");
const type_graphql_1 = require("type-graphql");
const job_application_arguments_1 = require("../job-application/job-application-arguments");
const cv_arguments_1 = require("../cv-resolvers/cv-arguments");
;
let EditUserInput = class EditUserInput {
};
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    (0, class_validator_1.MaxLength)(30),
    __metadata("design:type", String)
], EditUserInput.prototype, "userFirstName", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    (0, class_validator_1.MaxLength)(30),
    __metadata("design:type", String)
], EditUserInput.prototype, "userLastName", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], EditUserInput.prototype, "email", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    (0, class_validator_1.MinLength)(3),
    __metadata("design:type", String)
], EditUserInput.prototype, "userLocation", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    (0, class_validator_1.MinLength)(6),
    __metadata("design:type", String)
], EditUserInput.prototype, "password", void 0);
__decorate([
    (0, type_graphql_1.Field)(type => [job_application_arguments_1.JobInput]),
    __metadata("design:type", Array)
], EditUserInput.prototype, "jobs", void 0);
__decorate([
    (0, type_graphql_1.Field)(type => [cv_arguments_1.CVInput]),
    __metadata("design:type", Array)
], EditUserInput.prototype, "cvs", void 0);
EditUserInput = __decorate([
    (0, type_graphql_1.InputType)()
], EditUserInput);
exports.EditUserInput = EditUserInput;
