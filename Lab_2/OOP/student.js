"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.student = void 0;
var student = /** @class */ (function () {
    function student(id, name) {
        this.id = id;
        this.name = name;
        this.courses = [];
    }
    student.prototype.addCourse = function (course, student) {
        course.addStudent(student);
        this.courses.push(course);
    };
    student.prototype.showAllCourses = function () {
        for (var _i = 0, _a = this.courses; _i < _a.length; _i++) {
            var course_1 = _a[_i];
            course_1.showCourseDetails();
        }
    };
    student.prototype.getName = function () {
        console.log("Student Name:", this.name);
    };
    student.prototype.showDetails = function () {
        console.log("ID:", this.id);
        console.log("Name:", this.name);
        console.log();
    };
    return student;
}());
exports.student = student;
