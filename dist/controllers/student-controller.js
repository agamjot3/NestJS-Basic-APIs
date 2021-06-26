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
exports.StudentController = void 0;
const common_1 = require("@nestjs/common");
let StudentController = class StudentController {
    getStudents() {
        return "All Students";
    }
    getStudentById() {
        return "Particular Student by ID";
    }
    createStudent() {
        return "Student Creation Successful";
    }
    updateStudent() {
        return "Student Information Updated Successfully";
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
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], StudentController.prototype, "getStudentById", null);
__decorate([
    common_1.Post(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], StudentController.prototype, "createStudent", null);
__decorate([
    common_1.Put('/:studentId'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], StudentController.prototype, "updateStudent", null);
StudentController = __decorate([
    common_1.Controller('students')
], StudentController);
exports.StudentController = StudentController;
//# sourceMappingURL=student-controller.js.map