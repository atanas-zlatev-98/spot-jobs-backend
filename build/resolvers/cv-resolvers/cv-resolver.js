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
exports.UserCvResolver = void 0;
const type_graphql_1 = require("type-graphql");
const cv_entity_1 = require("../../entity/cv-entity");
const cv_arguments_1 = require("./cv-arguments");
const cv_edit_1 = require("./cv-edit");
let UserCvResolver = class UserCvResolver {
    async getAllCVs() {
        return await cv_entity_1.UserCVModel.find({});
    }
    async getCVbyID(_id) {
        return await cv_entity_1.UserCVModel.findById(_id);
    }
    async createNewCv(data) {
        const newCv = new cv_entity_1.UserCVModel(data);
        await newCv.save();
        return newCv;
    }
    async deleteCv(_id) {
        return await cv_entity_1.UserCVModel.findByIdAndRemove(_id);
    }
    async editCv(_id, data) {
        return await cv_entity_1.UserCVModel.findByIdAndUpdate(_id, data, { new: true });
    }
};
__decorate([
    (0, type_graphql_1.Query)(returns => [cv_entity_1.UserCV]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserCvResolver.prototype, "getAllCVs", null);
__decorate([
    (0, type_graphql_1.Query)(returns => cv_entity_1.UserCV),
    __param(0, (0, type_graphql_1.Arg)("_id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserCvResolver.prototype, "getCVbyID", null);
__decorate([
    (0, type_graphql_1.Mutation)(returns => cv_entity_1.UserCV),
    __param(0, (0, type_graphql_1.Arg)("data")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [cv_arguments_1.UserCVArguments]),
    __metadata("design:returntype", Promise)
], UserCvResolver.prototype, "createNewCv", null);
__decorate([
    (0, type_graphql_1.Mutation)(returns => cv_entity_1.UserCV),
    __param(0, (0, type_graphql_1.Arg)("_id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserCvResolver.prototype, "deleteCv", null);
__decorate([
    (0, type_graphql_1.Mutation)(returns => cv_entity_1.UserCV),
    __param(0, (0, type_graphql_1.Arg)("_id")),
    __param(1, (0, type_graphql_1.Arg)("data")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, cv_edit_1.UserCVArgumentsEdit]),
    __metadata("design:returntype", Promise)
], UserCvResolver.prototype, "editCv", null);
UserCvResolver = __decorate([
    (0, type_graphql_1.Resolver)()
], UserCvResolver);
exports.UserCvResolver = UserCvResolver;
