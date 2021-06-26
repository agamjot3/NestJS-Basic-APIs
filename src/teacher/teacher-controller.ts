import { Controller, Get, Post, Put, Param, Body } from "@nestjs/common";

@Controller('teachers')
export class TeacherController {
    @Get()
    getTeachers() {
        return "All Teachers"
    }

    @Get('/:teacherId')
    getTeacherById(@Param('teacherId') teacherId: string) {
        return `Teacher with the id:${teacherId}`
    }

    @Get('/:teacherId/students')
    getStudentsByTeacher(@Param('teacherId') teacherId: string) {
        return `Students for the particular teacher with the id:${teacherId}`
    }

    @Put('/:teacherId/students/:studentId')
    updateStudentForTeacher(@Param('teacherId') teacherId: string, @Param('studentId') studentId: string, @Body() body) {
        return `Student with the id:${studentId}
                With the teacher of id:${teacherId}
                Updated with details:${JSON.stringify(body)}`
    }

}