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
exports.TeacherController = void 0;
const common_1 = require("@nestjs/common");
let TeacherController = class TeacherController {
    getTeachers() {
        return "All Teachers";
    }
    getTeacherById() {
        return "Specific Teacher";
    }
    getStudentsByTeacher() {
        return "Students for the particular teacher";
    }
    updateStudentForTeacher() {
        return "Student For This Teacher Updated.";
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TeacherController.prototype, "getTeachers", null);
__decorate([
    common_1.Get('/:teacherId'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TeacherController.prototype, "getTeacherById", null);
__decorate([
    common_1.Get('/:teacherId/students'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TeacherController.prototype, "getStudentsByTeacher", null);
__decorate([
    common_1.Put('/:teacherId/students/:studentId'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TeacherController.prototype, "updateStudentForTeacher", null);
TeacherController = __decorate([
    common_1.Controller('teachers')
], TeacherController);
exports.TeacherController = TeacherController;
//# sourceMappingURL=teacher-controller.js.map