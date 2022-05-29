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
exports.JobInput = exports.NewJobArguments = void 0;
const class_validator_1 = require("class-validator");
const mongodb_1 = require("mongodb");
const type_graphql_1 = require("type-graphql");
let NewJobArguments = class NewJobArguments {
};
__decorate([
    (0, type_graphql_1.Field)(),
    (0, class_validator_1.MinLength)(5),
    __metadata("design:type", String)
], NewJobArguments.prototype, "jobLogo", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, class_validator_1.MaxLength)(50),
    __metadata("design:type", String)
], NewJobArguments.prototype, "jobTitle", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, class_validator_1.Length)(2, 1000),
    __metadata("design:type", String)
], NewJobArguments.prototype, "jobDescription", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, class_validator_1.MaxLength)(100),
    __metadata("design:type", String)
], NewJobArguments.prototype, "jobRequiredExpirience", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, class_validator_1.MaxLength)(100),
    __metadata("design:type", String)
], NewJobArguments.prototype, "jobPosition", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, class_validator_1.MaxLength)(10),
    __metadata("design:type", String)
], NewJobArguments.prototype, "jobSalary", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, class_validator_1.MaxLength)(30),
    __metadata("design:type", String)
], NewJobArguments.prototype, "jobLocation", void 0);
NewJobArguments = __decorate([
    (0, type_graphql_1.InputType)()
], NewJobArguments);
exports.NewJobArguments = NewJobArguments;
let JobInput = class JobInput extends NewJobArguments {
};
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", mongodb_1.ObjectId)
], JobInput.prototype, "_id", void 0);
JobInput = __decorate([
    (0, type_graphql_1.InputType)()
], JobInput);
exports.JobInput = JobInput;
