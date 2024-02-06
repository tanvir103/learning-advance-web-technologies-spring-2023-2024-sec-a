import { student } from "./student";

export class course{

    private courseID: string;
    private courseName: string;
    private facultyName: string;
    private section: string;
    private registeredStudents : student[];

    constructor(courseID:string, courseName:string, section: string, facultyName: string){
        this.courseID = courseID;
        this.courseName = courseName;
        this.section = section;
        this.facultyName = facultyName;
        this.registeredStudents = [];
    }

    addStudent(studentName: student) : void {
        this.registeredStudents.push(studentName);
    }

    showCourseDetails() : void {
        console.log("Course ID:", this.courseID);
        console.log("Course Name:", this.courseName);
        console.log("Section:", this.section);
        console.log("Faculty:", this.facultyName);
        for(let registeredStudents of this.registeredStudents){
            registeredStudents.getName()
        }
        console.log();
    }

}