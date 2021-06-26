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
exports.TeacherController = void 0;
const common_1 = require("@nestjs/common");
let TeacherController = class TeacherController {
    getTeachers() {
        return "All Teachers";
    }
    getTeacherById(teacherId) {
        return `Teacher with the id:${teacherId}`;
    }
    getStudentsByTeacher(teacherId) {
        return `Students for the particular teacher with the id:${teacherId}`;
    }
    updateStudentForTeacher(teacherId, studentId, body) {
        return `Student with the id:${studentId}
                With the teacher of id:${teacherId}
                Updated with details:${JSON.stringify(body)}`;
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
    __param(0, common_1.Param('teacherId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TeacherController.prototype, "getTeacherById", null);
__decorate([
    common_1.Get('/:teacherId/students'),
    __param(0, common_1.Param('teacherId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TeacherController.prototype, "getStudentsByTeacher", null);
__decorate([
    common_1.Put('/:teacherId/students/:studentId'),
    __param(0, common_1.Param('teacherId')), __param(1, common_1.Param('studentId')), __param(2, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", void 0)
], TeacherController.prototype, "updateStudentForTeacher", null);
TeacherController = __decorate([
    common_1.Controller('teachers')
], TeacherController);
exports.TeacherController = TeacherController;
//# sourceMappingURL=teacher-controller.js.map