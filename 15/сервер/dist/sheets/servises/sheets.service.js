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
const common_1 = require("@nestjs/common");
const rxjs_1 = require("rxjs");
const userEntity_1 = require("../models/userEntity");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
let SheetsService = class SheetsService {
    constructor(sheetsRepository) {
        this.sheetsRepository = sheetsRepository;
    }
    findAll() {
        return rxjs_1.from(this.sheetsRepository.find());
    }
    findId(userId) {
        return rxjs_1.from(this.sheetsRepository.findOne(userId));
    }
    create(createSheetDto) {
        return this.sheetsRepository.save(createSheetDto);
    }
    edit(editSheetsDto) {
        return this.sheetsRepository.save(editSheetsDto);
    }
    delete(userId) {
        this.sheetsRepository.delete(userId);
    }
};
SheetsService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_2.InjectRepository(userEntity_1.UserEntity)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], SheetsService);
exports.SheetsService = SheetsService;
//# sourceMappingURL=sheets.service.js.map