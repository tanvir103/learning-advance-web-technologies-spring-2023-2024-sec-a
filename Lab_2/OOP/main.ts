import { student } from "./student" 
import { course } from "./course"
import { teacher } from "./teacher"

let student1 = new student("21-44589-1", "Rianul Amin")
student1.showDetails()

let teacher1 = new teacher("21-44626-1", "Tanvir Hasan Tamal")
teacher1.showDetails()

let course1 = teacher1.createCourse("C-01", "ATP-3", "A")
let course2 = teacher1.createCourse("C-02", "OOP-2", "D")

student1.addCourse(course1, student1)
student1.addCourse(course2, student1)

student1.showAllCourses()

course1.showCourseDetails()