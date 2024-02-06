import { course } from "./course";
import { student } from "./student";

export class teacher{

    private id: string;
    private name: string;
    private courses : course[];

    constructor(id:string, name:string){
        this.id = id;
        this.name = name;
        this.courses = [];
    }

    createCourse(courseID: string, courseName: string, section: string) : course {
        let course1 = new course(courseID, courseName, section, this.name);
        return course1
    }

    showAllCourses() : void {
        for(let course of this.courses){
            course.showCourseDetails();
        }
    }

    showDetails() : void {
        console.log("ID:", this.id);
        console.log("Name:", this.name);
        console.log();
    }
}
