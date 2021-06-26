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
exports.StudentController = void 0;
const common_1 = require("@nestjs/common");
let StudentController = class StudentController {
    getStudents() {
        return "All Students";
    }
    getStudentById(studentId) {
        return `Student by ID:${studentId}`;
    }
    createStudent(body) {
        console.log(body);
        return `Student Creation Successfull. ${JSON.stringify(body)}`;
    }
    updateStudent(studentId, body) {
        return `Updated student by ID:${studentId} 
        With the following details: ${JSON.stringify(body)}`;
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], StudentController.prototype, "getStudents", null);
__decorate([
    common_1.Get('/:studentId'),
    __param(0, common_1.Param('studentId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StudentController.prototype, "getStudentById", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], StudentController.prototype, "createStudent", null);
__decorate([
    common_1.Put('/:studentId'),
    __param(0, common_1.Param('studentId')), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], StudentController.prototype, "updateStudent", null);
StudentController = __decorate([
    common_1.Controller('students')
], StudentController);
exports.StudentController = StudentController;
//# sourceMappingURL=student-controller.js.map