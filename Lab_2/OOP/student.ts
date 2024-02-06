import { course } from "./course";

export class student{

    private id: string;
    private name: string;
    private courses : course[];

    constructor(id:string, name:string){
        this.id = id;
        this.name = name;
        this.courses = [];
    }

    addCourse(course: course, student: student) : void {
        course.addStudent(student);
        this.courses.push(course);
    }

    showAllCourses() : void {
        for(let course of this.courses){
            course.showCourseDetails();
        }
    }

    getName() : void {
        console.log("Student Name:", this.name);
    }

    showDetails() : void {
        console.log("ID:", this.id);
        console.log("Name:", this.name);
        console.log();
    }


}