export declare class TeacherController {
    getTeachers(): string;
    getTeacherById(teacherId: string): string;
    getStudentsByTeacher(teacherId: string): string;
    updateStudentForTeacher(teacherId: string, studentId: string, body: any): string;
}
