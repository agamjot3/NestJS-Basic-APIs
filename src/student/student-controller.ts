import { Controller, Param, Get, Post, Put, Body } from "@nestjs/common";

@Controller('students')
export class StudentController {
    @Get()
    getStudents() {
        return "All Students"
    }
    // @Get('/:studentId')
    // getStudentById(@Param() params: { studentId: string }) {
    //     console.log(params)
    //     return "Particular Student by ID"
    // }
    @Get('/:studentId')
    getStudentById(@Param('studentId') studentId: string) {
        return `Student by ID:${studentId}`
    }
    @Post()
    createStudent(@Body() body) {
        console.log(body)
        return `Student Creation Successfull. ${JSON.stringify(body)}`
    }
    @Put('/:studentId')
    updateStudent(@Param('studentId') studentId: string, @Body() body) {
        return `Updated student by ID:${studentId} 
        With the following details: ${JSON.stringify(body)}`
    }

}