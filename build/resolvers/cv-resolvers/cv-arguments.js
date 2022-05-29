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
exports.CVInput = exports.UserCVArguments = void 0;
const class_validator_1 = require("class-validator");
const mongodb_1 = require("mongodb");
const type_graphql_1 = require("type-graphql");
let UserCVArguments = class UserCVArguments {
};
__decorate([
    (0, type_graphql_1.Field)(),
    (0, class_validator_1.MaxLength)(30),
    __metadata("design:type", String)
], UserCVArguments.prototype, "first_name", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, class_validator_1.MaxLength)(30),
    __metadata("design:type", String)
], UserCVArguments.prototype, "middle_name", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, class_validator_1.MaxLength)(30),
    __metadata("design:type", String)
], UserCVArguments.prototype, "last_name", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], UserCVArguments.prototype, "date_of_birth", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, class_validator_1.MaxLength)(50),
    __metadata("design:type", String)
], UserCVArguments.prototype, "user_location", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], UserCVArguments.prototype, "user_email", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, class_validator_1.MaxLength)(10),
    __metadata("design:type", String)
], UserCVArguments.prototype, "user_telephone", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, class_validator_1.MaxLength)(40),
    __metadata("design:type", String)
], UserCVArguments.prototype, "user_proffesion", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, class_validator_1.MaxLength)(100),
    __metadata("design:type", String)
], UserCVArguments.prototype, "user_education", void 0);
UserCVArguments = __decorate([
    (0, type_graphql_1.InputType)()
], UserCVArguments);
exports.UserCVArguments = UserCVArguments;
let CVInput = class CVInput extends UserCVArguments {
};
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", mongodb_1.ObjectId)
], CVInput.prototype, "_id", void 0);
CVInput = __decorate([
    (0, type_graphql_1.InputType)()
], CVInput);
exports.CVInput = CVInput;
